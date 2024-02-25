const Footer = ({ length }) => {
    return (
        <footer>
            {length} {length === 1 ? "location" : "locations"}
        </footer>
    )
}

export default Footer
