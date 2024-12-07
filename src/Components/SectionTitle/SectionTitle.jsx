

const SectionTitle = ({Heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;