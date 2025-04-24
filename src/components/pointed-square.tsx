
import "./pointed-square.css"; // Assurez-vous d'ajouter le style dans ce fichier ou inline

const SquareWithDots = () => {
  const dots = [];

  // Générer 100 points avec un dégradé basé sur leur position
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const opacity = 1 - (row + col) / 18; // Calcule l'opacité en fonction de la position
      const color = `rgba(185, 218, 185, ${opacity})`; // Couleur de départ avec opacité dynamique
      dots.push(
        <div
          key={`${row}-${col}`}
          className="dot"
          style={{ backgroundColor: color }}
        ></div>
      );
    }
  }

  return <div className="square-container">{dots}</div>;
};

export default SquareWithDots;
