
export function applyBouncingEffect(logo) {
    let isBouncing = false;

    logo.addEventListener('animationstart', function() {
        isBouncing = true;
    });

    logo.addEventListener('animationend', function() {
        isBouncing = false;
    });

    logo.addEventListener('click', function() {
        if (!isBouncing) {
            logo.classList.toggle('bounce');
        }
    });
}

