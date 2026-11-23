
const confetti = document.getElementById('confetti');
const ctx = confetti.getContext('2d');
confetti.width = window.innerWidth;
confetti.height = window.innerHeight;

const flowerTypes = [
    {
        type: 'lily',
        draw: (ctx, x, y, size, angle) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.scale(size / 80, size / 120);
        
            ctx.beginPath();
            ctx.ellipse(40, 60, 12, 36, 0, 0, 2 * Math.PI);
            ctx.fillStyle = '#fff6f6';
            ctx.strokeStyle = '#e0b0ff';
            ctx.lineWidth = 2;
            ctx.fill(); ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(40, 60, 8, 28, 0, 0, 2 * Math.PI);
            ctx.fillStyle = '#f8e1ff';
            ctx.strokeStyle = '#e0b0ff';
            ctx.lineWidth = 1.5;
            ctx.fill(); ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(40, 60, 4, 18, 0, 0, 2 * Math.PI);
            ctx.fillStyle = '#e0b0ff';
            ctx.strokeStyle = '#c299fc';
            ctx.lineWidth = 1;
            ctx.fill(); ctx.stroke();
            
            ctx.beginPath();
            ctx.rect(37, 90, 6, 30);
            ctx.fillStyle = '#7cfc7c';
            ctx.fill();
            ctx.restore();
        }
    },
    {
        type: 'tulip',
        draw: (ctx, x, y, size, angle) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.scale(size / 80, size / 120);
         
            ctx.beginPath();
            ctx.moveTo(40, 80);
            ctx.quadraticCurveTo(30, 60, 40, 40);
            ctx.quadraticCurveTo(50, 60, 40, 80);
            ctx.closePath();
            ctx.fillStyle = '#ffb7c5';
            ctx.strokeStyle = '#e75480';
            ctx.lineWidth = 2;
            ctx.fill(); ctx.stroke();
       
            ctx.beginPath();
            ctx.ellipse(40, 90, 8, 18, 0, 0, 2 * Math.PI);
            ctx.fillStyle = '#7cfc7c';
            ctx.fill();
          
            ctx.beginPath();
            ctx.rect(37, 90, 6, 30);
            ctx.fillStyle = '#7cfc7c';
            ctx.fill();
            ctx.restore();
        }
    }
];

const flowerPieces = Array.from({length: 40}, () => {
    const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    return {
        type,
        x: Math.random() * confetti.width,
        y: Math.random() * confetti.height - confetti.height,
        size: Math.random() * 40 + 40,
        speed: Math.random() * 1.2 + 0.7,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.01
    };
});

function drawFlowers() {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
    flowerPieces.forEach(f => {
        f.type.draw(ctx, f.x, f.y, f.size, f.angle);
    });
}

function updateFlowers() {
    flowerPieces.forEach(f => {
        f.y += f.speed;
        f.x += Math.sin(f.angle) * 0.7;
        f.angle += f.angleSpeed;
        if (f.y > confetti.height + 40) {
            f.x = Math.random() * confetti.width;
            f.y = -60;
            f.size = Math.random() * 40 + 40;
            f.speed = Math.random() * 1.2 + 0.7;
            f.angle = Math.random() * Math.PI * 2;
            f.angleSpeed = (Math.random() - 0.5) * 0.01;
            f.type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        }
    });
}

function animateFlowers() {
    drawFlowers();
    updateFlowers();
    requestAnimationFrame(animateFlowers);
}

window.addEventListener('resize', () => {
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;
});

animateFlowers();


const essayContainer = document.getElementById('essayContainer');
window.onload = () => {
    setTimeout(() => {
        essayContainer.classList.add('visible');
    }, 1200);
};
