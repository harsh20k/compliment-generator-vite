export default function handler(req, res) {
  const compliments = [
    "You're doing great!",
    "Keep going, you're learning fast.",
    "Your persistence is inspiring.",
    "You make progress every day.",
    "This project will make you smile."
  ];

  const random = compliments[Math.floor(Math.random() * compliments.length)];
  res.status(200).json({ compliment: random });
}