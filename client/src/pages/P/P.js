import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import PostForm from '../../components/PostForm/PostForm';
import { setIsNotMain } from '../../redux/actions/isNMAC';
import pain from './p.module.css';

const Pain = () => {
    const dispatch = useDispatch();

    useEffect(() => [
        dispatch(setIsNotMain(true))
    ],[])

    return (
        <div className={pain.container}>
            <PostForm/>
        </div>
    );
};

export default Pain;