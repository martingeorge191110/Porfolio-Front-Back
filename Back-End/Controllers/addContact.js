// Controllers/addContact.js
import { readFile, writeFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const dataPath = resolve(dirname(__filename), "../Data_Container/userInfo.json");
const messPath = resolve(dirname(__filename), "../Data_Container/userMess.json");

const postInfo = async (data) => {
    const { name, email, phone } = data;

    const file = await new Promise((resolve, reject) => {
        readFile(dataPath, "utf8", (err, file) => {
            if (err) {
                reject(err);
            } else {
                resolve(file);
            }
        });
    });

    let jsonFile = JSON.parse(file);
    jsonFile[email] = { name, phone };

    await new Promise((resolve, reject) => {
        writeFile(dataPath, JSON.stringify(jsonFile, null, 2), "utf8", (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });

    return jsonFile;
};

const postMessage = async (data) => {
    const { email, message } = data;

    const file = await new Promise((resolve, reject) => {
        readFile(messPath, "utf8", (err, file) => {
            if (err) {
                reject(err);
            } else {
                resolve(file);
            }
        });
    });

    let jsonFile;
    try {
        jsonFile = JSON.parse(file);
    } catch (err) {
        throw new Error("Error parsing JSON");
    }

    if (!jsonFile[email]) {
        jsonFile[email] = [];
    }

    jsonFile[email].push(message);

    await new Promise((resolve, reject) => {
        writeFile(messPath, JSON.stringify(jsonFile, null, 2), "utf8", (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });

    return jsonFile;
};

const postInfoAndMessage = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const userInfo = await postInfo({ name, email, phone });
        const userMessages = await postMessage({ email, message });

        res.status(200).json({
            userInfo,
            messages: userMessages
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            "status": "Failed",
            "message": "Error in processing the request"
        });
    }
};

export { postInfoAndMessage };
