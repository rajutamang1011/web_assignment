import Slider from '../../components/Slider'

const slides = [
  {
    image: 'images/slider/slider_1.jpg',
    title: 'Elementry and middle school English',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  },
  {
    image: 'images/slider/slider_2.jpg',
    title: 'National wide choice',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
  },
  {
    image: 'images/slider/slider_3.jpg',
    title: 'Where does it come from?',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
]

const Home = () => {
  return (
    <>
      <Slider slides={slides} />
    </>
  )
}

export default Home
