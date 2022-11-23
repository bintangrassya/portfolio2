const hidden = document.querySelectorAll("#hidden");

    hidden.forEach((section) => {
      section.style.display = "none";
    });

    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("input").value;
      document.querySelector(".namauser").style.display = "none";

      document.body.style.overflow = "scroll";

      hidden.forEach((section) => {
        section.style.display = "block";
      });

      document.querySelector(
        "banner"
      ).innerHTML += `<h1>Hai ${name}!, selamat datang di CV ku <3 </h1>`;
      document.querySelector("body").appendChild(banner);
    });