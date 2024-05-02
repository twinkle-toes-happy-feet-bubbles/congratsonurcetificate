function WriteUp({name, course}){
    return(
        <>
        <div className="writeup text-center">
            <p>
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Certificate of Proof</h2>
                
                
            </p>
            <p class="mt-6 leading-4 text-blue-500">
            We would like to congratulate {name} on completing the course on {course} and proving you are an idiot.
            </p>
            <p class="text-base font-semibold text-indigo-600">
            Evan modda chekaniki ippudu aa postlu
            </p>
        </div>
        </>
    );
}

export default WriteUp;