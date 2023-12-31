
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import HomeContent from "../components/content/home";
import { useRouter } from "next/router";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState('init');
  const [chatHistory, setChatHistory] = useState([]);

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }

  const router = useRouter();

  return (
    <Layout index={selectedIndex} thoughts={[]}>
      <HomeContent />
    </Layout>
  )
}

export default Home