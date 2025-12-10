import React from "react";
//icons for lebels in email form import
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";
export default function Email() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append Web3Forms Access Key (Safe to send to Laravel as it will be ignored by validation)
    formData.append("access_key", "236e1b3c-9ff3-4681-aa96-cc5452a3ceb6");

    try {
        // Send to both Backend (Admin Panel) and Web3Forms (Email)
        const [backendRes, web3Res] = await Promise.all([
            fetch("http://localhost:8000/api/contact-messages", {
                method: "POST",
                body: formData,
            }),
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
        ]);

        const web3Data = await web3Res.json();
        
        // If both succeed (Laravel 201/200 and Web3Forms success)
        // If Web3Forms succeeds (Email sent), consider it a success for the user
        // We log backend errors but don't stop the user experience
        if (web3Data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset(); // Always reset if email sent
            
            if (!backendRes.ok) {
                 console.error("Backend Save Failed:", backendRes.status);
            }
        } else {
            console.error("Web3Forms Failed:", web3Data);
            setResult(web3Data.message || "Failed to submit form.");
        }
    } catch (error) {
        console.error("Network Error", error);
        setResult("Network error, please try again later.");
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] p-8  text-[var(--text-primary)] ">
      <div className="max-w-md mx-auto bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg ">
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
          <label htmlFor="name" className="mb-2 text-lg font-bold flex items-center"><FiUser className="mr-2" />Name</label>
          <input type="text" name="name" required placeholder="Enter your name" className="mb-2 px-4 py-2 rounded-md border-2 border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] " />

          <label htmlFor="email" className="mb-2 text-lg font-bold flex items-center"><FiMail className="mr-2" />Email</label>
          <input type="email" name="email" required placeholder="Enter your email" className="mb-2 px-4 py-2 rounded-md border-2 border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] " />

          <label htmlFor="message" className="mb-2 text-lg font-bold flex items-center"><FiMessageCircle className="mr-2" />Message</label>

          <textarea name="message" required placeholder="Enter your message" className="mb-2 px-4 py-2 rounded-md border-2 border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] w-2xl h-32 shadow-neutral-400 "></textarea>

          <button type="submit" className="bg-[var(--accent)] text-white px-4 py-2 rounded-md hover:scale-105 transition ">Submit Form</button>

        </form>
        <span>{result}</span>
      </div>

    </div>
  );
}

