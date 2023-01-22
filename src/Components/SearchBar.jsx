import { useState } from "react";

function SearchBar({ handleSubmit }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(term);
    }

    const [term, setTerm] = useState("");

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            </form>
        </div>
    );
}
  
export default SearchBar;