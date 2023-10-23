import React from "react";

const Services = () => {
  return (
    <section className="my-[96px]">
      <h3 className="text-[#1f3257] text-5xl mb-6">
        Seamless, Smart and Accissible
      </h3>
      <div className="flex flex-col gap-1 md:flex-row">
        <div className="bg-service1 bg-no-repeat h-[450px] object-contain p-4 rounded-lg overflow-hidden w-[100%]">
          <h2 className="text-white mb-4 text-3xl font-bold">
            Digital Connect
          </h2>
          <p className="text-white text-lg">
            Explore your vehicle through Ashnni application, remote On/Off,
            Vehicle status, rider information, cost savings, service and
            maintenance and other
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-service2 bg-[#089ff1] bg-no-repeat h-[221px] rounded-lg overflow-hidden p-4">
            <h2 className="text-white mb-4 text-3xl font-bold">Diagnostics</h2>
            <p className="text-white text-lg">
              Monitor your battery and motor in real time, emergency alerts,
              periodic maintenance alerts, monthly performance reports
            </p>
          </div>
          <div className="bg-service2 bg-[#089ff1] bg-no-repeat h-[221px] rounded-lg overflow-hidden p-4">
            <h2 className="text-white mb-4 text-3xl font-bold">
              Vehicle Tracking
            </h2>
            <p className="text-white text-lg">
              Monitor your battery and motor in real time, emergency alerts,
              periodic maintenance alerts, monthly performance reports
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
