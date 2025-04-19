const latestIgPost = "https://www.instagram.com/p/DDyVUTUxYeW/embed";

document.addEventListener("DOMContentLoaded", function () {
    // Select the Instagram iframe
    const instagramIframe = document.getElementById("ig_post");

    // Update the iframe's src attribute with the latest Instagram post URL
    instagramIframe.src = latestIgPost;
});


