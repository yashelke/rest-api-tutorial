// controllers/goalController.js

export const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals." });
};

export const setGoals = (req, res) => {
  if (!req.body.text) {
        // return res.status(400).json({ message: "Please add a text field." });
        res.status(400);
        throw new Error("Please add a text field.");

  }

  res.status(201).json({ message: "Set Goals." });
};

export const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}.` });
};

export const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}.` });
};
