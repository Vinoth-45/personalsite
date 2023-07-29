let contactMe = () => {
    let contactMeContainer = document.getElementById("contactme-container-id");
    let topContainer = document.getElementById("top-container-id");
    let topCloud = document.getElementById("top-cloud-id");
    let bottomCloud = document.getElementById("bottom-cloud-id");
    contactMeContainer.style.display = "block";
    topContainer.style.position = "unset";
    topCloud.style.position = "unset";
    bottomCloud.style.position = "unset";

};

let contactMeClose = () => {
    let contactMeContainer = document.getElementById("contactme-container-id");
    let topContainer = document.getElementById("top-container-id");
    let topCloud = document.getElementById("top-cloud-id");
    let bottomCloud = document.getElementById("bottom-cloud-id");
    contactMeContainer.style.display = "none";
    topContainer.style.position = "relative";
    topCloud.style.position = "absolute";
    bottomCloud.style.position = "absolute";    
};



