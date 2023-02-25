const card = document.querySelectorAll(".card");

function handleMouseMove(e) {
    const el = this;
    const elRect = el.getBoundingClientRect();
    const x = e.clientX - elRect.x;
    const y = e.clientY - elRect.y;
    const midCardWidth = elRect.width / 2;
    const midCardHeight = elRect.height / 2;
    const angleX = -(y - midCardHeight) / 8;
    const angleY = (x - midCardWidth) / 8;
    let glowX = x / elRect.width * 100;
    let glowY = y / elRect.height * 100;
    el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, black, transparent)`;
    this.children[1].style.opacity = "0.3";
}

function resetCardTransform() {
    this.children[0].style.transform = "rotateX(0) rotateY(0)";
    this.children[1].style.transform = "rotateX(0) rotateY(0)";
    this.children[1].style.opacity = "0";
}

card.forEach( el => {
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", resetCardTransform);
});
