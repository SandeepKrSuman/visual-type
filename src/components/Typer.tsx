import React from 'react';
import './Typer.scss';

interface Props {
    toType: string;
    next: () => void;
}

const Typer: React.FC<Props> = ({toType, next}) => {

    const [boxColor, setBoxColor] = React.useState<string>("");
    const [txt, setTxt] = React.useState<string>("");
    const [proceed, setProceed] = React.useState<boolean>(false);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        if(proceed)
        {
            setTxt("");
            setBoxColor("#1A374D");
            next();
            setProceed(false);
        }
        e.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(event.target.value);
        if(event.target.value === toType)
        {
            setBoxColor("#06FF00");
            setProceed(true);
        }
        else
        {
            setBoxColor("#FF1818");
            setProceed(false);
        }
    };

    return (
        <form className="type-container" onSubmit={handleSubmit}>
            <input className="typer" style={{outlineColor: `${boxColor}`}} onChange={handleChange} value={txt} spellCheck="false" autoFocus></input>
        </form>
    );
};

export default Typer;