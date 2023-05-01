/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {
    const { _id, rating, total_view, title, author, details, image_url } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex gap-2 align-items-center'>
                {author.img ? <Image style={{ height: '40px' }} src={author.img} roundedCircle></Image> : ''}
                <div className='flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('MMMM Do YYYY')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details} </> : <>{details.slice(0, 250)} ....<Link to={`/news/${_id}`}> Read more</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='d-flex flex-grow-1 gap-2 align-items-center' >
                    <Rating
                     placeholderRating={rating.number}
                     readonly
                     emptySymbol={<FaRegStar></FaRegStar>}
                     placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                     fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <p className='mb-0'>{rating.number}</p>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsCard;