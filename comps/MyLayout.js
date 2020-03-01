import Header from "./Header"

const layoutStyle = {
    
    margin: 60,
    padding: 40,
    
    
    border: '20px solid #DC2700'
};

export default function Layout (props) {
    return(
        <div style={layoutStyle}>
        <Header />
        {props.children}
        </div>
    )
}