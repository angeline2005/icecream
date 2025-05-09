import React, { useState } from "react";
import loginbg from "./loginbg.png";
import axios from "axios";

export const AddNew = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(false);
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        if (!image || !title || !price) {
            alert("Please fill all fields including image.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("price", price);
        formData.append("image", image);

        try {
            const response = await axios.post("http://localhost:5000/api/customizes", formData);
            console.log("Upload successful:", response.data);
            alert("Upload successful");
        } catch (err) {
            console.error("Upload error:", err.response?.data || err.message);
            alert("Upload failed");
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${loginbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                height: "auto",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                className="row"
                style={{
                    marginLeft: "600px",
                    marginTop: "100px",
                    width: "600px",
                    height: "auto",
                    backgroundColor: "rgba(255, 182, 193, 0.7)",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <div
                    className="row"
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "26px",
                        marginBottom: "20px",
                    }}
                >
                    <p style={{ marginLeft: "220px" }}>ADD NEW</p>
                </div>

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        width: "80%",
                        padding: "10px",
                        margin: "5px 0",
                        border: "1px solid #fff",
                        borderRadius: "5px",
                        fontSize: "16px",
                        outline: "none",
                    }}
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={{
                        width: "80%",
                        padding: "10px",
                        margin: "5px 0",
                        border: "1px solid #fff",
                        borderRadius: "5px",
                        fontSize: "16px",
                        outline: "none",
                    }}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{
                        width: "80%",
                        padding: "10px",
                        margin: "5px 0",
                        border: "1px solid #fff",
                        borderRadius: "5px",
                        fontSize: "16px",
                        outline: "none",
                        backgroundColor: "white",
                    }}
                />

                {image && (
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Preview"
                        style={{
                            width: "150px",
                            marginTop: "10px",
                            borderRadius: "10px",
                            border: "2px solid white",
                        }}
                    />
                )}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "10px",
                        justifyContent: "center",
                    }}
                >
                    <input
                        type="checkbox"
                        id="availability"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                            appearance: "none",
                            border: "2px solid pink",
                            borderRadius: "5px",
                            backgroundColor: available ? "pink" : "white",
                            position: "relative",
                        }}
                    />
                    <label
                        htmlFor="availability"
                        style={{ fontSize: "16px", color: "white" }}
                    >
                        Available
                    </label>
                </div>

                <button
                    style={{
                        width: "200px",
                        height: "50px",
                        backgroundColor: "white",
                        color: "#5c4033",
                        border: "2px solid #5c4033",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginTop: "10px",
                        transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f5c6b5")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "white")
                    }
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </div>
        </div>
    );
};
