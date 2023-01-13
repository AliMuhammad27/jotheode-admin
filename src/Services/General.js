import axios from "axios";
import Error from "../Components/Modals/Modal.Error";

export const ImageWrapper = (image, currentImageUrl, callback) => {
  const imageExists = [...image?.values()]?.[0];
  // console.log("currentImageUrl", currentImageUrl);
  if (imageExists) {
    axios
      .post(`/image/upload`, image)
      .then((res) => {
        console.log("Res", res);
        if (res?.data?.statusCode == 200) {
          callback(res?.data?.data?.image);
        }
      })
      .catch((err) => {
        console.log("Error", err);
        Error(err?.response?.data?.message);
      });
    return;
  }
  return callback(currentImageUrl);

  // return currentImageUrl
  //   ? callback(currentImageUrl)
  //   : Error("Please Upload Profile Picture");
};

// export const handleExcelExport = async (endpoint) => {
//   try {
//     axios
//       .get(endpoint, {
//         responseType: "arraybuffer",
//       })
//       .then((response) => {
//         const blob = new Blob([response], {
//           type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         });
//         const link = document.createElement("a");
//         link.href = window.URL.createObjectURL(blob);
//         link.download = `${Date.now()}.xls`;
//         link.click();
//       });
//   } catch (error) {
//     console.log("handleExcelExport error", error);
//     Error(error);
//   }
// };

export const handleExcelExport = async (endpoint) => {
  try {
    let fileName = endpoint?.split("/");

    const response = await axios.get(endpoint, {
      responseType: "arraybuffer",
      headers: { "Content-Type": "blob" },
    });

    const outputFilename =
      fileName?.length > 0
        ? `${fileName[2]}_${fileName[1]}_${Date.now()}.xlsx`
        : `${Date.now()}.xlsx`;

    // If you want to download file automatically using link attribute.
    const url = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", outputFilename);
    document.body.appendChild(link);
    link.click();

    // // OR you can save/write file locally.
    // fs.writeFileSync(outputFilename, response.data);
  } catch (error) {
    throw Error(error);
  }
};
