export function explode(x, y) {
    const colors = ['#0ff', '#39ff14', '#ff00ff', '#ff4500'];

    for (let i = 0; i < 20; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        gsap.set(particle, {
            position: 'absolute',
            left: x + 'px',
            top: y + 'px'
        });

        gsap.to(particle, {
            left: x + (Math.random() - 0.5) * 200 + 'px',
            top: y + (Math.random() - 0.5) * 300 + 'px',
            scale: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            onComplete: () => particle.remove()
        });
    }
}

