import './writeup.css';

function WriteUp({name, course}){
    return(
        <>
        <div className="writeup">
            <p>
                hello {name}! <br />
                Congratulations on completing the course on {course}. <br />
            </p>
        </div>
        </>
    );
}

export default WriteUp;