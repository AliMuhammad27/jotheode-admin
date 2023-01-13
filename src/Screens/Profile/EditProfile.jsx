import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Success from "../../Components/Modals/Modal.Success";
import useFileReader from "../../Hooks/useFileReader";
import { editProfileSchema } from "../../Schema/profileSchema";
import { asset } from "../../Util/helpers";
import Error from "../../Components/Modals/Modal.Success";
import { useMutation } from "react-query";
import { updateProfile } from "../../Services/Profile";
import { useEffect } from "react";
import { setUser } from "../../redux/slice";
import { setAccessToken } from "../../Util/authHeader";
import Button from "../../Components/Button";
import ImageSelector from "../../Components/ImageSelector";
const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.slice);
  const [userDetails, setuseDetails] = useState(user || null);
  const [info, setInfo] = useState({
    firstname: user?.firstname,
    lastname: user?.lastname,
    user_image: user?.image,
  });
  const { firstname, lastname, user_image } = info;
  console.log("firstname", firstname);
  console.log("info", info);
  const { mutate, isLoading } = useMutation((data) => updateProfile(data), {
    onSuccess: (res) => {
      Success(res?.data?.message);
      navigate(-1);
      setUser(res?.data?.user);
    },
    onError: (err) => {
      console.log(err);
      Error(err?.response?.data?.message);
    },
  });
  const handleUpdate = () => {
    const formdata = new FormData();
    if (userDetails?.firstname)
      formdata.append("firstname", userDetails?.firstname);
    if (userDetails?.lastname)
      formdata.append("lastname", userDetails?.lastname);
    if (userDetails?.user_image)
      formdata.append("user_image", userDetails?.user_image);
    mutate(formdata);
  };
  return (
    <div className="configuration">
      <div className="container-fluid">
        {/* =============== Profile Details ================== */}
        <div className="box my-4">
          <div className="row align-items-center mb-4">
            <div className="col-12">
              <div className="backTitle mb-3">
                <Link type="button" className="backLink me-1" to="/profile">
                  <i className="fas fa-arrow-left" />
                </Link>
                <div className="pageTitleInner">
                  <h1 className="pageTitle text-capitalize m-0">
                    Edit Profile
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <form action="./my-profile.php">
            <div className="row mb-3">
              <div className="col-xl-6">
                <div className="row mb-lg-5 mb-3">
                  <div className="col-12">
                    <div className="userImageFrame">
                      <ImageSelector
                        setImage={(user_image) =>
                          setInfo({ ...info, user_image })
                        }
                        image={info?.user_image}
                        is_edit={true}
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel">
                      First Name{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Enter First Name"
                      onChange={(e) =>
                        setInfo({ ...info, firstname: e.target.value })
                      }
                      value={info?.firstname}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel">
                      Last Name{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Enter Last Name"
                      onChange={(e) =>
                        setInfo({ ...info, lastname: e.target.value })
                      }
                      value={info?.lastname}
                    />
                  </div>
                </div>
                {/* <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel">
                      Phone Number{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      className="mainInput tel"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel">
                      Date of birth{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="date"
                      className="mainInput"
                      placeholder="11 / 09 / 2023"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <Button
                  loading={isLoading}
                  onClick={handleUpdate}
                  type="button"
                  className="mainButton primaryButton mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#profileUpdated"
                >
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
