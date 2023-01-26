import { projects } from "../../../data/projectsData";

export default function handler(req, res) {
    res.status(200).json(projects);
}
