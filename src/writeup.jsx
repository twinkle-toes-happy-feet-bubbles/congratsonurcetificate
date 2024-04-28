import './writeup.css';

function WriteUp({name, course}){
    return(
        <>
        <div className="writeup">
            <p>
                Hello {name}! <br />
                Congratulations on completing the course on {course} and proving you are an idiot. <br />
                Evan modda chekaniki ippudu aa postlu <br/>
            </p>
        </div>
        </>
    );
}

export default WriteUp;