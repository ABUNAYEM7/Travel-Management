import PopularDestination from './PopularDestination'
import Prices from './Prices'
import OthersServices from './OthersServices'
import Testimonial from './Testimonial'
import CustomPrices from './CustomPrices'
import LatestBlogs from './LatestBlogs'

const HomePage = () => {
  return (
    <div>
      {/* popular destination */}
      <section>
        <PopularDestination/>
      </section>
      {/* package prices */}
      <section>
        <Prices/>
      </section>
      {/* others services*/}
      <section>
        <OthersServices/>
      </section>
      {/* Testimonials*/}
      <section>
        <Testimonial/>
      </section>
      {/* Custom prices*/}
      <section>
        <CustomPrices/>
      </section>
      {/* Latest Blogs*/}
      <section>
        <LatestBlogs/>
      </section>
    </div>
  )
}

export default HomePage
