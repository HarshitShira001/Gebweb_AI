const extractJson = (text) => {
    if (!text) {
        return null;
    }

    // Use a single regex to strip markdown code blocks more effectively
    const cleaned = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    const firstBrace = cleaned.indexOf('{');
    const closeBrace = cleaned.lastIndexOf('}');

    // Basic validation to ensure braces exist and are in the right order
    if (firstBrace === -1 || closeBrace === -1 || firstBrace > closeBrace) {
        return null;
    }

    const jsonString = cleaned.slice(firstBrace, closeBrace + 1);

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        return null;
    }
};

export default extractJson;