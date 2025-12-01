"use client";

const FeaturedPackages = () => {


  return (
<section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Trusted By Travelers Across India
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <div className="text-4xl font-bold">10K+</div>
        <p>Happy Travelers</p>
      </div>

      <div>
        <div className="text-4xl font-bold">120+</div>
        <p>Destinations</p>
      </div>

      <div>
        <div className="text-4xl font-bold">800+</div>
        <p>Trips Completed</p>
      </div>

      <div>
        <div className="text-4xl font-bold">4.8★</div>
        <p>Ratings</p>
      </div>
    </div>

  </div>
</section>



  );
};

export default FeaturedPackages;