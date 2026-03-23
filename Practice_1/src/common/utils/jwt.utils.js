import crypto from "crypto";

const generateRsetToken = () => {
    const rawToken = crypto.randomBytes(32).toString("hex");
    const hasedToken = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

    return { rowToken, hasedToken}

}

export { generateRsetToken}