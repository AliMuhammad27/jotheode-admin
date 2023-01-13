import React from "react";
const EditSubscription = () => {
  return (
    <div class="configuration">
      <div class="container-fluid">
        <div class="box">
          <div class="row align-items-center mb-4">
            <div class="col-12">
              <div class="backTitle mb-3">
                <button type="button" class="backLink me-1">
                  <i class="fas fa-arrow-left"></i>
                </button>
                <div class="pageTitleInner">
                  <h1 class="pageTitle text-capitalize m-0">
                    Edit New subscription Package
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-8 col-lg-10">
              <form action="#">
                <div class="row mb-3">
                  <div class="col-12">
                    <label for="" class="mainLabel mb-1">
                      Package Name<span class="text-danger">*</span>:
                    </label>
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="mainInput"
                      placeholder="Enter Package Name"
                      value="Monthly"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12">
                    <label for="" class="mainLabel mb-1">
                      Package Price{" "}
                    </label>
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="mainInput"
                      placeholder="Enter Package Price"
                      value="$50"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12">
                    <label for="" class="mainLabel mb-1">
                      Package details
                    </label>
                  </div>
                  <div class="col-12">
                    <textarea
                      name=""
                      id=""
                      rows="6"
                      class="mainInput"
                      placeholder="Enter Package details"
                    >
                      aaaaaaaaaaaabbbbbbbbbcccccccccccccccccdddddddddddeeeeeeeeeeeeeefffffffffffffffgggggggggggghhhhhhhhhhhhhiiiiiiiiiiiijjjjjjjjjjkkkkkkkkkkkkklllllllllllllmmmmmmmmmmmmmmmmnnnnnn
                    </textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button
                      type="submit"
                      class="mainButton primaryButton"
                      data-bs-toggle="modal"
                      data-bs-target="#packageUpdated"
                    >
                      Update
                    </button>
                    <button
                      type="submit"
                      class="mainButton primaryButton2"
                      data-bs-toggle="modal"
                      data-bs-target="#packageDeleted"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSubscription;
