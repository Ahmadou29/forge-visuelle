const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("mousemove", e => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    link.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translate(0,0)";
  });
});


 
  ScrollReveal().reveal('.section', { 
    distance: '40px',
    duration: 800,
    origin: 'bottom',
    easing: 'ease-in-out'
  });

 const btn = document.getElementById("myButton");

    // Zoom / shrink au clic
    btn.addEventListener("mousedown", () => {
      btn.classList.add("clicked");
    });

    btn.addEventListener("mouseup", () => {
      btn.classList.remove("clicked");
    });

    // Option: effet “magnetique” quand on bouge la souris sur le bouton
    btn.addEventListener("mousemove", e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0,0)";
    });
