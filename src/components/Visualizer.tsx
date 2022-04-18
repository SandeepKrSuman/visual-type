import {FC} from 'react';
import './Visualizer.scss';

interface Props {
    toShow: string;
}

const Visualizer: FC<Props> = ({toShow}) => {
    return (
        <div className="visual-container">
            <h2 className="word-box">{toShow}</h2>
        </div>
    );
};

export default Visualizer;