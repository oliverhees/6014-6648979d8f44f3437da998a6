// Update the menu.js file and save it
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Der Pfad zur JSON-Datei im /config Verzeichnis
    const filePath = path.join(process.cwd(), "config", "menu.json");

    try {
      // Speichern der Daten in die JSON-Datei
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
      res.status(200).json({ message: "Menu Data saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error saving menu data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
