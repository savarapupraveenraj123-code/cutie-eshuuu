import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const Index = () => {
  const [smiled, setSmiled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleSmile = useCallback(() => {
    setSmiled(true);
    setClickCount((c) => c + 1);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />

      {/* Soft gradient background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-petal/30 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-glow/20 blur-3xl" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-blush/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <motion.section
          className="text-center pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.div
            className="inline-block text-6xl mb-6"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💗
          </motion.div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-gradient-love leading-tight">
            Hey Esha… I wanted to tell you something
          </h1>
          <p className="mt-4 text-muted-foreground text-lg font-light">
            We've been close friends for a while now… but I've been carrying something in my heart that I need to say.
          </p>
        </motion.section>

        {/* How she makes me feel */}
        <motion.section
          className="glass-card rounded-2xl p-8 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 italic">
            How you make me feel ✨
          </h2>
          <p className="text-foreground/80 leading-relaxed text-lg font-light">
            You've always been my closest friend — the one I turn to, the one who gets me. But somewhere
            along the way, something changed. When you're around, everything feels
            <span className="text-primary font-medium"> brighter</span>. My heart beats a little faster,
            my smile comes a little easier, and our late-night conversations mean more to me than you know.
            You make me{" "}
            <span className="text-primary font-medium">happy</span>, you make me{" "}
            <span className="text-primary font-medium">excited</span>, and yes — you make me a little{" "}
            <span className="text-accent font-medium">nervous</span> too… in a way a friend probably shouldn't. 🦋
          </p>
        </motion.section>

        {/* Something special */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 glow-soft" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              I don't know if this is love…
            </h2>
            <p className="text-foreground/80 text-lg font-light leading-relaxed">
              But whatever it is, it feels <em className="text-primary font-medium">special</em>.
              Like a warm glow that stays with me long after you've gone. Like a melody I can't get
              out of my head. Like something I want to hold onto, gently, carefully — because it
              means so much. 🌸
            </p>
          </div>
        </motion.section>

        {/* Playful/flirty */}
        <motion.section
          className="glass-card rounded-2xl p-8 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            And just between us… 😏
          </h2>
          <p className="text-foreground/80 text-lg font-light leading-relaxed">
            I'd be lying if I said I don't think about your smile more than I should.
            Or the way you laugh — it does something to me, honestly. There's this little spark
            when you look my way, and I hope you feel it too.
            <span className="text-primary"> You're kind of impossible not to notice.</span> 💫
          </p>
        </motion.section>

        {/* Interactive */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <motion.button
            onClick={handleSmile}
            className="relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-medium text-lg shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
          >
            {smiled ? `You smiled! 🥰 (×${clickCount})` : "Click if you smiled 😊"}
          </motion.button>

          <AnimatePresence>
            {smiled && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-primary font-medium text-lg"
              >
                That just made my heart skip a beat 💓
              </motion.p>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Secret message */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <motion.button
            onClick={() => setShowSecret(!showSecret)}
            className="px-6 py-3 rounded-full border-2 border-primary/30 text-primary font-body font-medium hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {showSecret ? "Hide my secret 🙈" : "Want to know a secret? 🤫"}
          </motion.button>

          <AnimatePresence>
            {showSecret && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="mt-6 glass-card rounded-2xl p-6 text-foreground/80 text-lg font-light italic">
                  Every time my phone buzzes, I secretly hope it's you. 💌
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Closing */}
        <motion.section
          className="text-center pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 glow-soft">
            <motion.div
              className="text-5xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🌙
            </motion.div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 italic">
              Maybe this is just a crush…
            </h2>
            <p className="text-foreground/80 text-lg font-light leading-relaxed">
              But it feels like more than that. You're my best friend and I'd never want to lose that —
              but I also can't keep pretending I don't feel something deeper. And I just wanted you to know, Esha.
            </p>
            <p className="mt-6 text-primary font-display text-xl italic">
              — From someone who can't stop thinking about you, Esha 💗
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Index;
