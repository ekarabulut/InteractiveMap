const Footer = ({ length }) => {
    return (
        <footer>
            <p>{length} {length === 1 ? "location" : "locations"}</p>
        </footer>
    )
}

export default Footer
