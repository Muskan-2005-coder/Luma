"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Brain,
  Heart,
  Shield,
  MessageCircle,
  Sparkles,
  LineChart,
  Waves,
  Check,
  ArrowRight,
  HeartPulse,
  Lightbulb,
  Lock,
  MessageSquareHeart,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";
import { Ripple } from "@/components/ui/ripple";
import { size } from "lodash";

export default function Home() {
  const emotions = [
    { value: 0, label: "😣 Depressed", color: "from-red-500/100" },
    { value: 17, label: "😔 Sad ", color: "from-pink-500/100" },
    { value: 34, label: "😕 Anxious", color: "from-purple-500/100" },
    { value: 42, label: "😐 Neutral", color: "from-yellow-500/100" },
    { value: 68, label: "🙂 Content", color: "from-green-500/100" },
    { value: 85, label: "😊 Happy", color: "from-blue-500/100" },
    { value: 100, label: "😁 Euphoric", color: "from-pink-500/100" },
  ];

  const [emotion, setEmotion] = useState(50);
  const [mounted, setMounted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const welcomeSteps = [
    {
      title: "👋 Hello, Myself Luma",
      description:
     <b>  "As your AI Lumaon, I'm designed to support your mental well-being with empathy and confidentiality. This space is yours—to reflect, share, and grow."</b> ,
      icon: Waves,
    },
    {
      title: " 🤖 Personalized Support",
      description:
        "I'm always here to listen—no judgment, no pressure. Just a safe space for your thoughts and feelings. This is your space to share freely, without fear or judgment",
      icon: Brain,
    },
    {
      title: "🔒 Privacy First: Your Safe Space",
      description:
        "Our conversations are completely private and secure. I follow strict ethical guidelines and always respect your boundaries, ensuring a trusted and confidential experience.",
      icon: Shield,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentEmotion =
    emotions.find((em) => Math.abs(emotion - em.value) < 15) || emotions[2];

  const features = [
{
  icon: HeartPulse,
  title: "Around-the-Clock Care",
  description: <b>"We're here for you anytime — day or night, whenever you need to talk."</b>,
  color: "from-rose-500/100",
  delay: 0.2,
},
{
  icon: Lightbulb,
  title: "AI-Powered Insights",
  description:<b> "Receive thoughtful, personalized guidance powered by emotional intelligence."</b>,
  color: "from-emerald-500/100",
  delay: 0.4,
},
{
  icon: Lock,
  title: "Confidential & Secure",
  description: <b>"Your conversations are encrypted and completely private — always."</b>,
  color: "from-amber-500/100",
  delay: 0.6,
},
{
  icon: MessageSquareHeart,
  title: "Clinically-Informed Care",
  description: <b>"Backed by research and grounded in evidence-based therapeutic practices."</b>,
  color: "from-blue-500/100",
  delay: 0.8,
},
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <section className="relative min-h-[90vh] mt-20 flex flex-col items-center justify-center py-12 px-4">
    
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className={`absolute w-[500px] h-[500px] rounded-full blur-3xl top-0 -left-20 transition-all duration-700 ease-in-out
            bg-gradient-to-r ${currentEmotion.color} to-transparent opacity-60`}
          />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl bottom-0 right-0 animate-pulse delay-700" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
        </div>
        <Ripple className="opacity-60" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative space-y-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
            <Waves className="w-4 h-4 animate-wave text-primary" />
            <span className="relative text-foreground/90 dark:text-foreground after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary/30 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500">
           <b> <i>Your Trusted AI for Emotional Balance and Mental Health Support </i></b>
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-plus-jakarta tracking-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent [text-shadow:_0_1px_0_rgb(120_80_49_/_30%)] hover:to-primary transition-all duration-300">
            Embrace the
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-b from-foreground to-foreground/90 bg-clip-text text-transparent
            [text-shadow:_0_1px_0_rgb(120_40_49_/_30%)] hover:to-primary transition-all duration-300">
             Emotional Balance
            </span>
          </h1>
          <p className="max-w-[600px] mx-auto text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide">
           Discover a new era of emotional support — your AI Lumaon is here to listen, understand, and walk with you through every step of your journey.
          </p>
          <motion.div
            className="w-full max-w-[600px] mx-auto space-y-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="space-y-2 text-center">
              <p className="text-sm text-muted-foreground/80 font-medium">
            <b style={{fontSize:'15px',color:'grey'}}>   Whatever you're feeling, we're here to listen  </b> 
              </p>
              <div className="flex justify-between items-center px-2">
                {emotions.map((em) => (
                  <div
                    key={em.value}
                    className={`transition-all duration-500 ease-out cursor-pointer hover:scale-105 ${
                      Math.abs(emotion - em.value) < 15
                        ? "opacity-100 scale-110 transform-gpu"
                        : "opacity-50 scale-100"
                    }`}
                    onClick={() => setEmotion(em.value)}
                  >
                    <div className="text-2xl transform-gpu">
                      {em.label.split(" ")[0]}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">
                      {em.label.split(" ")[1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative px-2">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${currentEmotion.color} to-transparent blur-2xl -z-10 transition-all duration-500`}
              />
              <Slider
                value={[emotion]}
                onValueChange={(value) => setEmotion(value[0])}
                min={0}
                max={100}
                step={1}
                className="py-4"
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground animate-pulse">
               <b style={{fontSize:'15px',color:'grey'}}> Slide to express how you're feeling today</b>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => setShowDialog(true)}
              className="relative group h-12 px-8 rounded-full bg-gradient-to-r from-primary via-primary/90 to-secondary hover:to-primary shadow-lg shadow-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="relative z-10 font-medium flex items-center gap-2">
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 bg-pos-0 group-hover:bg-pos-100" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/20 flex items-start justify-center p-1 hover:border-primary/40 transition-colors duration-300">
            <div className="w-1 h-2 rounded-full bg-primary animate-scroll" />
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden">

        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16 space-y-4 text-white ">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent dark:text-primary/90">
              How May I Assist You
            </h2>
            <p className="text-foreground dark:text-foreground/95 max-w-2xl mx-auto font-medium text-lg">
          <b>   Step into a new era of emotional support — where empathy meets innovation.</b>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border border-primary/10 hover:border-primary/20 transition-all duration-300 h-[200px] bg-card/30 dark:bg-card/80 backdrop-blur-sm">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 dark:group-hover:opacity-30`}
                  />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                        <feature.icon className="w-5 h-5 text-primary dark:text-primary/90" />
                      </div>
                      <h3 className="font-semibold tracking-tight text-foreground/90 dark:text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground/90 dark:text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 dark:via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-lg">
          <DialogHeader>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                {welcomeSteps[currentStep] && (
                  <div>
                    {React.createElement(welcomeSteps[currentStep].icon, {
                      className: "w-8 h-8 text-primary",
                    })}
                  </div>
                )}
              </div>
              <DialogTitle className="text-2xl text-center">
                {welcomeSteps[currentStep]?.title}
              </DialogTitle>
              <DialogDescription className="text-center text-base leading-relaxed">
                {welcomeSteps[currentStep]?.description}
              </DialogDescription>
            </motion.div>
          </DialogHeader>
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {welcomeSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep ? "bg-primary w-4" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={() => {
                if (currentStep < welcomeSteps.length - 1) {
                  setCurrentStep((c) => c + 1);
                } else {
                  setShowDialog(false);
                  setCurrentStep(0);
                }
              }}
              className="relative group px-6"
            >
              <span className="flex items-center gap-2">
                {currentStep === welcomeSteps.length - 1 ? (
                  <>
                    Finish
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "46px",         
    padding: "20px",
  }}
><p style={{color:'amber',fontSize:'25px', fontWeight:'550px'}}><b>Follow Us : </b></p>
  {/* Twitter */}
  <a
    href="https://twitter.com/Luma-ai"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-flex" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="#1DA1F2"
    >
      <path d="M22.46 6c-.77.35-1.5.58-2.27.69.82-.49 1.45-1.27 1.75-2.2-.8.46-1.65.8-2.57.98a4.17 4.17 0 0 0-7.12 3.8C8.08 8.27 5.26 6.9 3.33 4.67c-.46.8-.73 1.73-.73 2.72 0 1.87.95 3.52 2.38 4.48-.68-.02-1.34-.2-1.91-.5v.05c0 2.6 1.86 4.76 4.3 5.25-.46.13-.96.2-1.47.2-.36 0-.7-.03-1.03-.1.7 2.1 2.7 3.63 5.08 3.67a8.37 8.37 0 0 1-5.14 1.76c-.33 0-.66-.02-.99-.06a11.8 11.8 0 0 0 6.29 1.85c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0 0 24 4.56a8.4 8.4 0 0 1-2.54.7z" />
    </svg>
  </a>
  
  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/Luma-ai"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-flex" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="#0A66C2"
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM2 9h6v12H2V9zm7.5 0h5.4v1.71h.08c.75-1.3 2.58-2.67 5.32-2.67 5.69 0 6.74 3.55 6.74 8.16V21H19V16.2c0-1.14-.02-2.6-1.59-2.6-1.6 0-1.85 1.25-1.85 2.51V21h-6V9z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/Luma-ai"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-flex" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="#E4405F"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.17.07 1.97.24 2.43.41a4.9 4.9 0 0 1 1.71 1.11 4.9 4.9 0 0 1 1.11 1.71c.17.46.34 1.26.41 2.43.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.07 1.17-.24 1.97-.41 2.43a4.9 4.9 0 0 1-1.11 1.71 4.9 4.9 0 0 1-1.71 1.11c-.46.17-1.26.34-2.43.41-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.17-.07-1.97-.24-2.43-.41a4.9 4.9 0 0 1-1.71-1.11 4.9 4.9 0 0 1-1.11-1.71c-.17-.46-.34-1.26-.41-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.07-1.17.24-1.97.41-2.43a4.9 4.9 0 0 1 1.11-1.71 4.9 4.9 0 0 1 1.71-1.11c.46-.17 1.26-.34 2.43-.41C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.73.07-.91.05-1.4.2-1.73.34-.44.17-.75.37-1.08.7-.33.33-.53.64-.7 1.08-.14.33-.29.82-.34 1.73C4.2 9.5 4.2 9.86 4.2 13c0 3.14 0 3.5.07 4.73.05.91.2 1.4.34 1.73.17.44.37.75.7 1.08.33.33.64.53 1.08.7.33.14.82.29 1.73.34 1.23.07 1.59.07 4.73.07s3.5 0 4.73-.07c.91-.05 1.4-.2 1.73-.34.44-.17.75-.37 1.08-.7.33-.33.53-.64.7-1.08.14-.33.29-.82.34-1.73.07-1.23.07-1.59.07-4.73s0-3.5-.07-4.73c-.05-.91-.2-1.4-.34-1.73a3.2 3.2 0 0 0-.7-1.08 3.2 3.2 0 0 0-1.08-.7c-.33-.14-.82-.29-1.73-.34C15.5 4.2 15.14 4.2 12 4.2zm0 3.3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 7.4a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8zm5.2-8a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/Luma-ai"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-flex" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="#1877F2"
    >
      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.35v21.3C0 23.4.6 24 1.325 24h11.483v-9.294H9.692v-3.622h3.116V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.098 2.795.142v3.24h-1.918c-1.504 0-1.794.715-1.794 1.765v2.314h3.587l-.467 3.623h-3.12V24h6.116C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0z" />
    </svg>
  </a>
</div>
    </div>
  );
}
