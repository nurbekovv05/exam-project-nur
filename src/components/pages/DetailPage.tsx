import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import React, {useEffect} from "react";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchMovie} from "../../store/ActionCreators/ActionCreators";


const DetailPage = () => {

    const dispatch = useAppDispatch();
    const {movieId} = useParams()
    useEffect(() => {
        dispatch(fetchMovie())
    }, [])

    const {loader, detail, erroring} = useAppSelector((state) => state.detailPage);
    const {language} = useAppSelector((state) => state.movieSlice)
    console.log(detail)
    return (
        <div className='mt-[100px]'>
            <div id='detail-card' className='relative' style={{
                background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}') no-repeat left/cover`,
                height: '550px',
                objectFit: 'contain'
            }}>
            </div>
            <div className='absolute top-[130px]'>
                <div className='detail-card'>
                    <img className='images'
                         src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}`} alt=""/>
                    <div className="detail-card--description">
                        {loader && <p>loading..</p>}
                        {erroring && <p>Err..</p>}
                        <h1 className='text-white text-4xl mb-[30px] '>{detail.title}</h1>
                        <p className='text-white w-[500px] mb-[5    0px]'>{detail.overview}</p>

                        <div>
                            <div className="vote"
                                 style={{background: `conic-gradient(yellow,${Math.round(detail.vote_average * 10) * 3.59})`}}>
                                <h3>   {Math.round(detail.vote_average * 10)} %</h3>
                            </div>
                        </div>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.profile_path}`} alt=""/>

                    </div>
                </div>
            </div>

        </div>
    );
};
export default DetailPage;
