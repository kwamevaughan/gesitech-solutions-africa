import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import SimpleModal from "./SimpleModal";

const TeamMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Eng. Benvolio Otieno",
      title: "Co-Founder & Director",
      image: "/assets/images/benvolio.png",
      bio: "Benvolio is an engineer and operations expert with deep experience in supply chain management. At Gesitech Solutions Africa, he ensures that every project is delivered with technical precision, safety, and efficiency. Benvolio Otieno is a co-founder and Director at Gesitech Solutions Africa, where he leads with a strong background in Engineering, Operations, and Supply Chain management. With years of hands-on experience in building and optimizing systems, he is passionate about ensuring that every project delivered by Gesitech meets the highest standards of safety, efficiency, and reliability. Benvolio’s focus on operational excellence and technical precision has been instrumental in positioning Gesitech as a trusted name in the LPG sector. Beyond the boardroom, he is driven by a vision to make clean energy more accessible and sustainable across Africa.",
      email: "info@gesitech.africa",
      phone: "+254 701 850850",
      linkedin: "https://www.linkedin.com/in/benvolio-otieno-13972298/",
      expertise: [],
      education: "",
      experience: "",
    },
    {
      id: 2,
      name: "Duncan Njue",
      title: "Co-Founder & Director",
      image: "/assets/images/duncan.png",
      bio: "Duncan is a business management and technology professional with a strong background in corporate partnerships and strategic alliances. He drives Gesitech's growth by building strategic collaborations and delivering innovative energy solutions. Duncan Njue is a co-founder and Director at Gesitech Solutions Africa, bringing a dynamic background in Business management, Technology, and Corporate Partnerships. With a strong track record in forging strategic collaborations, Duncan is committed to creating long-term value for clients and partners while driving growth for the company. His ability to connect technology with business needs enables Gesitech to deliver innovative LPG solutions tailored to diverse markets. Passionate about Africa’s energy transformation, Duncan’s leadership is guided by a commitment to sustainability, customer trust, and the belief that strong partnerships fuel progress.",
      email: "info@gesitech.africa",
      phone: "+254 701 850850",
      linkedin: "https://www.linkedin.com/in/njueduncanm/",
      expertise: [],
      education: "",
      experience: "",
    },
    {
      id: 3,
      name: "Matagaro Sironga",
      title: "Head of Legal & Compliance, Gesitech",
      image: "/assets/images/matagaro.png",
      bio: "Matagaro brings extensive expertise in Financial Technology Law (FinTech), Regulatory Technology (RegTech), Supervisory Technology (SupTech), and Tax Controversies. As an Advocate of the High Court of Kenya, he combines deep legal knowledge with practical experience in navigating complex regulatory landscapes. He holds a Bachelor of Laws (LLB) from the University of Nairobi and a Master of Laws (LLM) in International Business and Financial Law from the University of East London (UK), positioning him to drive Gesitech’s compliance and governance agenda with a strong global perspective.",
      email: "info@gesitech.africa",
      phone: "+254 701 850850",
      linkedin: "https://www.linkedin.com/in/stephen-matagaro-sironga-b0a11972",
      expertise: [],
      education: "",
      experience: "",
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleMemberClick(member)}
            >
              {/* Image Container */}
              <div className="relative h-120 overflow-hidden group">
                {/* Image with dark overlay on hover */}
                <div className="relative h-full w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gesitech-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                      <Icon icon="heroicons:plus" className="w-8 h-8" />
                    </div>
                    <p className="text-lg font-semibold">View Profile</p>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="absolute bottom-0 left-0 right-0 mx-4 mb-4">
                <div className="bg-gesitech-green text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-white text-sm">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <SimpleModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          selectedMember ? (
            <>
              {selectedMember.name}, {selectedMember.title}
            </>
          ) : "Team Member"
        }
        width="max-w-4xl"
      >
        {selectedMember && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image and Basic Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-0">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
                />
                <div className="space-y-4">
                  {/* <div className="flex flex-col items-start justify-start gap-2">
                    <h3 className="text-2xl font-bold text-gesitech-green mb-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-gesitech-blue font-semibold text-lg">
                      {selectedMember.title}
                    </p>
                  </div> */}
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Icon icon="heroicons:envelope" className="w-5 h-5 mr-3" />
                      <a href={`mailto:${selectedMember.email}`} className="text-sm hover:underline">
                        {selectedMember.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Icon icon="heroicons:phone" className="w-5 h-5 mr-3" />
                      <a href={`tel:${selectedMember.phone.replace(/\s+/g, '')}`} className="text-sm hover:underline">
                        {selectedMember.phone}
                      </a>
                    </div>
                    {/* <div className="flex items-center text-gray-600">
                      <Icon icon="mdi:linkedin" className="w-5 h-5 mr-3 text-[#0077B5]" />
                      <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                        LinkedIn Profile
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                {/* <h4 className="text-xl font-bold text-gray-900 mb-4">About</h4> */}
                <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
              </div>

              {/* Experience & Education */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Experience</h4>
                  <p className="text-gray-700">{selectedMember.experience}</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Education</h4>
                  <p className="text-gray-700">{selectedMember.education}</p>
                </div>
              </div> */}

              {/* Expertise */}
              {/* <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Contact Actions */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4">
                  {/* <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                    <Icon icon="heroicons:envelope" className="w-5 h-5 mr-2" />
                    Send Email
                  </button> */}
                  {/* <button 
                    onClick={() => window.open(selectedMember.linkedin, '_blank')}
                    className="flex items-center px-6 py-3 bg-gesitech-blue text-white rounded-xl hover:bg-gesitech-blue/80 transition-colors cursor-pointer"
                  >
                    <Icon icon="mdi:linkedin" className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </SimpleModal>
    </div>
  );
};

export default TeamMembers;