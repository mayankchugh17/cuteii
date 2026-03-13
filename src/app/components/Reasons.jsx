"use client";

import { motion } from "framer-motion";
const reasons = [
"Your smile.",
"Your eyes.",
"The way you look at me.",
"The way you calm my storms.",
"Your patience.",
"Your kindness.",
"Your voice.",
"The way you say my name.",
"How you care.",
"How you stay.",
"Your honesty.",
"Your silence.",
"Your touch.",
"Your hugs.",
"The way you listen.",
"How you see through me.",
"Your little surprises.",
"Your big heart.",
"Your late night talks.",
"The way you apologize.",
"How you make things better.",
"The way you forgive.",
"How you understand.",
"Your warmth.",
"Your flaws.",
"The way you remember details.",
"Your random texts.",
"How you hold my hand.",
"The way you miss me.",
"Your protectiveness.",
"Your dreams.",
"Your fear of losing me.",
"Your voice notes.",
"The way you make me laugh.",
"The way you look sleepy.",
"Your crazy ideas.",
"How you comfort me.",
"The way you respect me.",
"The way you look in my eyes.",
"Your little jealous moments.",
"Your shyness.",
"Your strength.",
"Your soft heart.",
"How you value small things.",
"How you say “I’m here”.",
"The way you say “I love you”.",
"How you get emotional.",
"The way you love music.",
"Your loyalty.",
"Your insecurities.",
"Your growth.",
"Your attention to me.",
"Your stubbornness.",
"Your hands.",
"Your heartbeats.",
"How you let me be me.",
"How you accept my darkness.",
"The way you inspire me.",
"The way you kiss.",
"How you look when you're mad.",
"How you fix broken things.",
"How you pray.",
"The way you laugh at my jokes.",
"The way you heal me.",
"How you love me despite everything.",
"Your inner child.",
"Your courage.",
"The way you pull me closer.",
"The way you react to compliments.",
"The way you express love.",
"The way you talk about your day.",
"The way you sit in silence with me.",
"The way you get excited.",
"The way you trust me.",
"How you've changed me.",
"The way you know what I'm not saying.",
"Your sleepy voice.",
"The way you say goodnight.",
"The way you touch my soul.",
"The way you calm my anxiety.",
"The way you remind me of home.",
"The way you give me peace.",
"The way you still choose me.",
"The way you look at stars.",
"The way you laugh with your eyes.",
"The way you ask if I've eaten.",
"The way you remember my pain.",
"The way you call me yours.",
"How you stay in my prayers.",
"The way you love me even when I’m unlovable.",
"Because you’re you.",
"The way your smile makes my day better.",
"The way you understand my silence.",
"The way you always believe in me.",
"The way you make ordinary moments special.",
"The way your presence makes everything feel right.",
"The way you hold my heart so gently.",
"The way you make my world brighter.",
"The way you make me feel safe.",
"Because loving you is the best thing that ever happened to me ❤️",
];

function Reasons() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >

        <h2 className="text-3xl md:text-5xl font-bold text-rose-700 mb-4">
          100 Reasons Why I Love You ❤️
        </h2>

        <p className="text-lg md:text-2xl text-rose-600 mb-10">
          Here are some of the reasons why I love you
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-4 text-rose-800 text-lg"
            >
              {index + 1}. {reason}
            </motion.li>
          ))}

        </ul>

      </motion.div>

    </div>

  );
}

export default Reasons;