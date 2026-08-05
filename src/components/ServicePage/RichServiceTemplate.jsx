import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import FloatingWhatsAppButton from '../FloatingWhatsAppButton/FloatingWhatsAppButton.jsx'
import LogoMark from '../Logo/LogoMark.jsx'

gsap.registerPlugin(ScrollTrigger)

/**
 * RichServiceTemplate — premium, primarily-cream master template for service
 * pages. Activated by ServicePage.jsx when `service.richContent` is present,
 * so the same /services/:slug route and reusable architecture keeps serving
 * every service; only the services with a filled-in `richContent` object get
 * this fuller treatment. Approved first for Capital Projects & Project
 * Management — intended to be reused once the other services are migrated.
 */

const CSS = `
/* ── Base ──────────────────────────────────────────────────── */
.rp-page { background: #F4F1EA; color: #07111D; font-family: "Manrope", system-ui, sans-serif; }
.rp-inner { max-width: 1180px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 64px); box-sizing: border-box; }
.rp-inner-narrow { max-width: 760px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 64px); box-sizing: border-box; }

/* ── Hero ──────────────────────────────────────────────────── */
.rp-hero {
  position: relative;
  min-height: clamp(520px, 82vh, 760px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: #07111D;
}
.rp-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
}
@media (max-width: 640px) {
  .rp-hero-img { object-position: center top; }
}
.rp-hero-img-placeholder {
  background: linear-gradient(135deg, #101c30 0%, #07111D 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: clamp(96px, 16vh, 140px) 20px 20px;
  box-sizing: border-box;
  text-align: center;
}
.rp-hero-img-placeholder .rp-placeholder-label {
  font-size: 0.85rem;
  color: rgba(244,241,234,0.55);
  max-width: 320px;
}
.rp-hero-img-placeholder .rp-placeholder-note {
  color: rgba(232,201,122,0.55);
}
.rp-hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(7,17,29,0.55) 0%, rgba(7,17,29,0.35) 35%, rgba(7,17,29,0.88) 100%),
    linear-gradient(90deg, rgba(7,17,29,0.55) 0%, rgba(7,17,29,0.15) 45%, rgba(7,17,29,0.15) 100%);
}
.rp-hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: clamp(120px, 16vh, 160px) 0 clamp(48px, 6vh, 64px);
}
.rp-eyebrow {
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.30em;
  text-transform: uppercase;
  color: #E8C97A;
  margin: 0 0 16px;
}
.rp-h1 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2.3rem, 5.4vw, 4.2rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.02;
  color: #F4F1EA;
  margin: 0 0 22px;
  max-width: 780px;
}
.rp-hero-desc {
  font-size: clamp(0.96rem, 1.4vw, 1.1rem);
  line-height: 1.68;
  color: rgba(244,241,234,0.72);
  max-width: 560px;
  margin: 0 0 32px;
}
.rp-hero-ctas { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; margin-bottom: 28px; }
.rp-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 28px;
  height: 50px;
  border-radius: 4px;
  background: linear-gradient(to bottom, #dbb96a, #a9802f);
  border: 1px solid rgba(201,162,74,0.45);
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #07111D;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 3px 18px rgba(169,128,47,0.4);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.rp-btn-primary:hover { transform: translateY(-1px) scale(1.015); box-shadow: 0 6px 24px rgba(169,128,47,0.56); }
.rp-btn-primary:focus-visible { outline: 2px solid rgba(201,162,74,0.8); outline-offset: 3px; }

/* Hero CTA — deliberately understated; the bold gold button is reserved for the final CTA */
.rp-hero-ctas .rp-btn-primary {
  background: transparent;
  border: 1px solid rgba(244,241,234,0.28);
  color: rgba(244,241,234,0.80);
  box-shadow: none;
}
.rp-hero-ctas .rp-btn-primary:hover {
  border-color: rgba(201,162,74,0.55);
  color: #E8C97A;
  transform: none;
  box-shadow: none;
}

.rp-hero-props {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(244,241,234,0.45);
}

/* ── Section scaffolding ───────────────────────────────────── */
.rp-section { padding: clamp(56px, 7vh, 88px) 0; }
.rp-section-sage { background: #EAE6D9; }
.rp-section-dark { background: #07111D; color: #F4F1EA; }
.rp-section-eyebrow {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #A9802F;
  margin: 0 0 14px;
}
.rp-section-dark .rp-section-eyebrow { color: #E8C97A; }
.rp-h2 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.6rem, 3.2vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #07111D;
  margin: 0 0 18px;
}
.rp-section-dark .rp-h2 { color: #F4F1EA; }
.rp-section-body {
  font-size: clamp(0.92rem, 1.3vw, 1.02rem);
  line-height: 1.72;
  color: rgba(7,17,29,0.58);
  max-width: 640px;
}
.rp-section-dark .rp-section-body { color: rgba(244,241,234,0.60); }

/* ── Three-part intro ──────────────────────────────────────── */
.rp-intro-section { overflow-x: clip; }
.rp-intro-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(32px, 5vw, 56px);
}
.rp-intro-col { padding-left: clamp(0px, 3vw, 32px); border-left: 1px solid rgba(201,162,74,0.28); }
.rp-intro-col:first-child { padding-left: 0; border-left: none; }
.rp-intro-word-wrap { position: relative; display: inline-block; }
.rp-intro-word {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #07111D;
  margin: 0 0 8px;
}
.rp-intro-rule {
  display: block;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.rp-intro-body { font-size: 0.92rem; line-height: 1.7; color: rgba(7,17,29,0.55); margin: 24px 0 0; }
@media (max-width: 760px) {
  .rp-intro-grid { grid-template-columns: 1fr; gap: 24px; }
  .rp-intro-col { padding-left: 0; border-left: none; }
}

/* ── Positioning statement ─────────────────────────────────── */
.rp-positioning { position: relative; text-align: center; overflow: hidden; }
.rp-positioning-watermark {
  position: absolute;
  top: 50%; left: 4%;
  width: min(480px, 58vw);
  transform: translate(-20%, -50%);
  opacity: 0.10;
  pointer-events: none;
}
@media (max-width: 640px) {
  .rp-positioning-watermark { left: -8%; width: min(360px, 70vw); }
}
.rp-positioning-watermark-lg { opacity: 0.055; }
@media (min-width: 641px) {
  .rp-positioning-watermark-lg {
    width: min(920px, 78vw);
    left: -8%;
    transform: translate(-30%, -50%);
  }
}
@media (max-width: 640px) {
  .rp-positioning-watermark-lg { width: min(220px, 52vw); opacity: 0.05; }
}
.rp-positioning-inner { position: relative; max-width: 700px; margin: 0 auto; }
.rp-positioning-rule { width: 44px; height: 2px; border-radius: 1px; background: linear-gradient(90deg, #A9802F, #E8C97A); margin: 0 auto 24px; }
.rp-positioning h2 { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(1.7rem, 3.6vw, 2.6rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.15; color: #07111D; margin: 0 0 20px; }
.rp-positioning p { font-size: clamp(0.92rem, 1.3vw, 1.02rem); line-height: 1.75; color: rgba(7,17,29,0.58); margin: 0 auto; max-width: 560px; }

/* ── Overview (asymmetric image + text) ───────────────────── */
.rp-overview-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(40px, 6vw, 72px);
  align-items: center;
}
.rp-overview-text { max-width: 480px; }
.rp-overview-p { font-size: 0.96rem; line-height: 1.78; color: rgba(7,17,29,0.60); margin: 0 0 18px; }
.rp-introfeature-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #A9802F;
  text-decoration: none;
  border-bottom: 1.5px solid rgba(169,128,47,0.30);
  padding-bottom: 3px;
  transition: color 180ms ease, border-color 180ms ease, gap 180ms ease;
}
.rp-introfeature-cta:hover { color: #8a6a26; gap: 13px; border-color: rgba(169,128,47,0.60); }
.rp-overview-img-wrap {
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  max-height: 560px;
  box-shadow: 0 20px 60px rgba(7,17,29,0.18);
}
.rp-overview-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
@media (max-width: 860px) {
  .rp-overview-grid { grid-template-columns: 1fr; }
  .rp-overview-img-wrap { max-height: 420px; order: -1; }
  .rp-overview-img-wrap img { object-position: var(--rp-ov-mobile-pos, center); }
  .rp-overview-text { max-width: 100%; }
}

/* ── Service list (editorial numbered rows) ───────────────── */
.rp-list-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 clamp(32px, 5vw, 64px);
  margin-top: clamp(28px, 4vh, 40px);
}
.rp-list-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 13px 0;
  border-bottom: 1px solid rgba(9,19,31,0.10);
  transition: padding-left 200ms ease, border-color 200ms ease;
}
.rp-list-row:hover { padding-left: 6px; border-color: rgba(169,128,47,0.35); }
.rp-list-num { font-size: 0.72rem; font-weight: 800; color: #A9802F; letter-spacing: 0.04em; flex-shrink: 0; width: 26px; }
.rp-list-label { font-size: 0.93rem; font-weight: 600; color: #07111D; line-height: 1.4; }
@media (max-width: 700px) {
  .rp-list-grid { grid-template-columns: 1fr; }
}

/* ── Service list — emphasized variant (opt-in per service) ── */
.rp-list-grid-emphasized {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: clamp(32px, 5vh, 48px);
  border-top: 1px solid rgba(9,19,31,0.10);
}
.rp-list-row-emphasized {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  padding: clamp(24px, 3.5vh, 32px) 20px;
  border-bottom: 1px solid rgba(9,19,31,0.10);
}
.rp-list-row-emphasized:nth-child(odd) { border-right: 1px solid rgba(9,19,31,0.10); }
.rp-list-num-emphasized {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  color: #A9802F;
}
.rp-list-label-emphasized {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #07111D;
  line-height: 1.3;
}
@media (max-width: 700px) {
  .rp-list-grid-emphasized { grid-template-columns: 1fr; }
  .rp-list-row-emphasized:nth-child(odd) { border-right: none; }
}

/* ── Capabilities icon grid (optional, per-service) ──────────── */
.rp-cap-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(18px, 2.5vw, 24px);
  margin-top: clamp(32px, 4vh, 44px);
}
.rp-cap-card {
  text-align: center;
  padding: clamp(28px, 3vw, 34px) 18px;
  border: 1px solid rgba(9,19,31,0.10);
  border-radius: 14px;
  background: #FDFCF8;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
}
.rp-cap-card:hover {
  border-color: rgba(201,162,74,0.35);
  box-shadow: 0 10px 26px rgba(7,17,29,0.07);
  transform: translateY(-2px);
}
.rp-cap-icon-wrap {
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
  border-radius: 12px;
  border: 1px solid rgba(201,162,74,0.30);
  background: rgba(201,162,74,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A9802F;
}
.rp-cap-icon-img { width: 30px; height: 30px; object-fit: contain; display: block; }
.rp-cap-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #07111D;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(201,162,74,0.30);
  display: inline-block;
}
.rp-cap-body {
  font-size: 0.82rem;
  line-height: 1.6;
  color: rgba(7,17,29,0.55);
  margin: 12px 0 0;
}
@media (max-width: 900px) {
  .rp-cap-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px) {
  .rp-cap-grid { grid-template-columns: 1fr; }
}
/* Bigger, more obvious cards + icons on desktop only */
@media (min-width: 901px) {
  .rp-cap-grid { gap: clamp(24px, 2.8vw, 32px); }
  .rp-cap-card { padding: 42px 28px; }
  .rp-cap-icon-wrap { width: 80px; height: 80px; border-radius: 16px; margin-bottom: 26px; }
  .rp-cap-icon-img { width: 46px; height: 46px; }
  .rp-cap-icon-wrap svg { width: 38px; height: 38px; }
  .rp-cap-title { font-size: 1.08rem; }
  .rp-cap-body { font-size: 0.9rem; }
}

/* ── Industries strip (optional, per-service) — moving marquee,
   same mechanics as the homepage TrustStrip banner ── */
.rp-industries { padding: 0; border-top: 1px solid rgba(9,19,31,0.08); }
.rp-industries-eyebrow-wrap { text-align: center; padding: clamp(26px, 3.5vh, 34px) 0 18px; }
.rp-industries-title {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.60rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #A9802F;
  margin: 0;
}
@keyframes rp-industries-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.rp-industries-banner {
  background: #0D1520;
  height: 62px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}
.rp-industries-banner::before,
.rp-industries-banner::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 180px;
  z-index: 2;
  pointer-events: none;
}
@media (max-width: 600px) {
  .rp-industries-banner::before,
  .rp-industries-banner::after { width: 72px; }
}
.rp-industries-banner::before {
  left: 0;
  background: linear-gradient(to right, #F4F1EA 0%, rgba(244,241,234,0.85) 30%, rgba(244,241,234,0.30) 70%, transparent 100%);
}
.rp-industries-banner::after {
  right: 0;
  background: linear-gradient(to left, #F4F1EA 0%, rgba(244,241,234,0.85) 30%, rgba(244,241,234,0.30) 70%, transparent 100%);
}
.rp-industries-track {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
  animation: rp-industries-scroll 20s linear infinite;
  will-change: transform;
}
.rp-industries-item2 { display: inline-flex; align-items: center; flex-shrink: 0; }
.rp-industries-label {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #F4F1EA;
  white-space: nowrap;
}
.rp-industries-sep { display: inline-flex; align-items: center; justify-content: center; width: 56px; flex-shrink: 0; }
.rp-industries-diamond { display: block; width: 5px; height: 5px; border-radius: 1px; background: rgba(201,162,74,0.52); transform: rotate(45deg); flex-shrink: 0; }
@media (prefers-reduced-motion: reduce) {
  .rp-industries-track { animation-play-state: paused; }
}

/* ── Dark benefits ─────────────────────────────────────────── */
.rp-benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(20px, 3vw, 28px);
  margin-top: clamp(32px, 5vh, 48px);
}
.rp-benefit-card {
  padding: 26px 22px;
  border: 1px solid rgba(244,241,234,0.10);
  border-radius: 10px;
  background: rgba(244,241,234,0.02);
}
.rp-benefit-num { font-size: 0.66rem; font-weight: 800; letter-spacing: 0.2em; color: #E8C97A; margin: 0 0 14px; }
.rp-benefit-title { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 1.04rem; font-weight: 800; letter-spacing: -0.01em; color: #F4F1EA; margin: 0 0 10px; }
.rp-benefit-body { font-size: 0.85rem; line-height: 1.65; color: rgba(244,241,234,0.52); margin: 0; }
@media (max-width: 900px) { .rp-benefits-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .rp-benefits-grid { grid-template-columns: 1fr; } }

/* ── Typical projects — visual cards ──────────────────────── */
.rp-typical-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
  gap: clamp(24px, 3.5vw, 40px);
  margin: clamp(28px, 4vh, 40px) 0 28px;
}
.rp-typical-card { display: flex; flex-direction: column; }
.rp-typical-img-wrap {
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  border: 1px solid rgba(7,17,29,0.08);
  box-shadow: 0 12px 28px rgba(7,17,29,0.10);
  margin-bottom: 18px;
}
.rp-typical-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.rp-typical-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  background: #DED8C7;
}
.rp-placeholder-label {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: rgba(7,17,29,0.68);
  line-height: 1.35;
  max-width: 220px;
}
.rp-placeholder-note {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(7,17,29,0.55);
}
.rp-typical-num { font-size: 0.66rem; font-weight: 800; letter-spacing: 0.2em; color: #A9802F; margin: 0 0 8px; }
.rp-typical-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.15rem, 1.7vw, 1.35rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #07111D;
  margin: 0 0 8px;
  line-height: 1.15;
}
.rp-typical-body { font-size: 0.87rem; line-height: 1.6; color: rgba(7,17,29,0.52); margin: 0; }
@media (max-width: 760px) {
  .rp-typical-grid { grid-template-columns: 1fr; gap: 36px; }
}
/* Dark variant (opt-in per service, e.g. typicalProjects.dark) */
.rp-section-dark .rp-typical-num { color: #E8C97A; }
.rp-section-dark .rp-typical-title { color: #F4F1EA; }
.rp-section-dark .rp-typical-body { color: rgba(244,241,234,0.55); }
.rp-section-dark .rp-typical-img-wrap { border-color: rgba(244,241,234,0.12); }
/* Wide 2-up variant (opt-in per service, e.g. typicalProjects.wideCards) — larger,
   more premium cards on laptop/desktop; stays 2-up at large widths per design intent. */
.rp-typical-grid-2col { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 760px) {
  .rp-typical-grid-2col { grid-template-columns: 1fr; }
}
/* Centers a trailing odd-numbered-out card instead of leaving it stuck to the
   left column (opt-in per service, e.g. typicalProjects.centerLastOdd). */
.rp-typical-grid-2col-center-last > .rp-typical-card:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  width: calc((100% - clamp(24px, 3.5vw, 40px)) / 2);
  margin: 0 auto;
}
@media (max-width: 760px) {
  .rp-typical-grid-2col-center-last > .rp-typical-card:last-child:nth-child(odd) { width: auto; margin: 0; }
}

/* ── Approach note — compact statement + 3-item row (per-service unique section) ── */
.rp-approach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(24px, 3.5vw, 36px);
  margin-top: clamp(28px, 4vh, 40px);
}
.rp-approach-item { padding-top: 16px; border-top: 2px solid rgba(169,128,47,0.4); }
.rp-approach-label {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #07111D;
  margin: 0 0 8px;
}
.rp-approach-body { font-size: 0.85rem; line-height: 1.6; color: rgba(7,17,29,0.55); margin: 0; }
@media (max-width: 760px) {
  .rp-approach-grid { grid-template-columns: 1fr; gap: 24px; }
}

/* ── Photo banner — full-bleed image + short caption (per-service unique section) ── */
.rp-photobanner-img-wrap {
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 21 / 9;
  border: 1px solid rgba(7,17,29,0.08);
  box-shadow: 0 16px 36px rgba(7,17,29,0.12);
  margin-bottom: clamp(24px, 3.5vh, 32px);
}
.rp-photobanner-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.rp-photobanner-caption { max-width: 620px; margin: 0 auto; text-align: center; }
.rp-photobanner-caption .rp-h2 { margin: 0 0 12px; }
.rp-photobanner-caption p { margin: 0 auto; }
.rp-photobanner-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 32px;
  max-width: 560px;
  margin: 24px auto 0;
  padding: 0;
  text-align: left;
}
.rp-photobanner-list li {
  list-style: none;
  position: relative;
  padding-left: 16px;
  font-size: 0.87rem;
  line-height: 1.5;
  color: rgba(7,17,29,0.6);
}
.rp-photobanner-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 6px;
  height: 1.5px;
  background: #A9802F;
}
@media (max-width: 760px) {
  .rp-photobanner-img-wrap { aspect-ratio: 4 / 3; }
}
@media (max-width: 560px) {
  .rp-photobanner-list { grid-template-columns: 1fr; }
}

/* ── Photo banner — side-by-side variant (image left, copy right) ── */
@media (min-width: 861px) {
  .rp-photobanner-sidebyside .rp-inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(32px, 5vw, 64px);
    align-items: center;
  }
  .rp-photobanner-sidebyside .rp-photobanner-img-wrap {
    margin-bottom: 0;
    max-width: none !important;
  }
  .rp-photobanner-sidebyside .rp-photobanner-caption {
    max-width: none;
    margin: 0;
    text-align: left;
  }
  .rp-photobanner-sidebyside .rp-photobanner-caption p { margin: 0; }
  .rp-photobanner-sidebyside .rp-photobanner-list { margin-left: 0; margin-right: 0; }
}

/* ── Process chain — light horizontal stage list (per-service unique section) ── */
.rp-process-chain {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: clamp(12px, 2.5vw, 20px);
  margin-top: clamp(28px, 4vh, 40px);
}
.rp-process-step { display: flex; align-items: flex-start; gap: clamp(12px, 2.5vw, 20px); }
.rp-process-step-inner { max-width: 190px; }
.rp-process-num { font-size: 0.66rem; font-weight: 800; letter-spacing: 0.2em; color: #A9802F; margin: 0 0 8px; }
.rp-process-label {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #07111D;
  line-height: 1.3;
  margin: 0;
}
.rp-process-arrow { color: rgba(169,128,47,0.45); font-size: 1.1rem; padding-top: 22px; flex-shrink: 0; }
.rp-section-dark .rp-process-num { color: #E8C97A; }
.rp-section-dark .rp-process-label { color: #F4F1EA; }
.rp-section-dark .rp-process-arrow { color: rgba(232,201,122,0.55); }
@media (max-width: 760px) {
  .rp-process-chain { flex-direction: column; gap: 20px; }
  .rp-process-step { width: 100%; }
  .rp-process-step-inner { max-width: none; }
  .rp-process-arrow { display: none; }
}

/* ── Related insight ───────────────────────────────────────── */
.rp-insight-card {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: clamp(24px, 4vw, 40px);
  align-items: center;
  background: #FDFCF8;
  border: 1px solid rgba(9,19,31,0.08);
  border-radius: 16px;
  padding: clamp(16px, 2vw, 20px);
  margin-top: clamp(24px, 3vh, 32px);
  text-decoration: none;
  transition: border-color 200ms ease, transform 200ms ease;
}
.rp-insight-card:hover { border-color: rgba(169,128,47,0.35); transform: translateY(-2px); }
.rp-insight-card:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 3px; }
.rp-insight-img { width: 100%; aspect-ratio: 16/10; border-radius: 10px; overflow: hidden; }
.rp-insight-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.rp-insight-cat { font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: #A9802F; margin: 0 0 10px; }
.rp-insight-title { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(1.05rem, 1.8vw, 1.3rem); font-weight: 800; letter-spacing: -0.02em; color: #07111D; margin: 0 0 10px; line-height: 1.3; }
.rp-insight-excerpt { font-size: 0.87rem; line-height: 1.6; color: rgba(7,17,29,0.55); margin: 0 0 14px; }
.rp-insight-meta { display: flex; align-items: center; gap: 14px; font-size: 0.76rem; color: rgba(7,17,29,0.4); }
.rp-insight-read { color: #A9802F; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.68rem; }
@media (max-width: 640px) {
  .rp-insight-card { grid-template-columns: 1fr; }
}

/* ── FAQ ───────────────────────────────────────────────────── */
.rp-faq-list { margin-top: clamp(24px, 3vh, 32px); display: flex; flex-direction: column; gap: 12px; max-width: 780px; }
.rp-faq-item { background: #FDFCF8; border: 1px solid rgba(9,19,31,0.08); border-radius: 10px; overflow: hidden; }
.rp-faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 0.93rem;
  font-weight: 700;
  color: #07111D;
}
.rp-faq-q:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: -2px; }
.rp-faq-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: rgba(9,19,31,0.06);
  color: #4A5568;
  font-size: 0.95rem;
  transition: transform 220ms ease, background 200ms ease, color 200ms ease;
}
.rp-faq-icon.is-open { transform: rotate(45deg); background: rgba(201,162,74,0.15); color: #A9802F; }
.rp-faq-a-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 280ms cubic-bezier(0.16,1,0.3,1); }
.rp-faq-a-wrap.is-open { grid-template-rows: 1fr; }
.rp-faq-a-inner { overflow: hidden; }
.rp-faq-a-inner p { margin: 0; padding: 0 20px 18px; font-size: 0.87rem; line-height: 1.68; color: rgba(7,17,29,0.55); }
@media (prefers-reduced-motion: reduce) {
  .rp-faq-a-wrap { transition: none; }
}

/* ── FAQ — centered accordion variant (opt-in via richContent.faqEyebrow) ── */
.rp-faq2-section { text-align: center; }
.rp-faq2-section .rp-section-body { margin: 0 auto; }
.rp-faq2-list {
  max-width: 700px;
  margin: clamp(28px, 4vh, 40px) auto 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: left;
}
.rp-faq2-item {
  border: 1px solid rgba(9,19,31,0.12);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 200ms ease;
}
.rp-faq2-item.is-open { border-color: rgba(169,128,47,0.4); }
.rp-faq2-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 19px 22px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: -0.005em;
  color: #07111D;
}
.rp-faq2-q:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: -2px; }
.rp-faq2-icon { position: relative; width: 15px; height: 15px; flex-shrink: 0; }
.rp-faq2-icon::before,
.rp-faq2-icon::after {
  content: '';
  position: absolute;
  background: #07111D;
  border-radius: 1px;
  transition: transform 260ms cubic-bezier(0.16,1,0.3,1);
}
.rp-faq2-icon::before { left: 0; top: 50%; width: 100%; height: 2px; transform: translateY(-50%); }
.rp-faq2-icon::after { top: 0; left: 50%; width: 2px; height: 100%; transform: translateX(-50%); }
.rp-faq2-item.is-open .rp-faq2-icon::after { transform: translateX(-50%) scaleY(0); }
.rp-faq2-item.is-open .rp-faq2-icon::before { background: #A9802F; }
.rp-faq2-a-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 280ms cubic-bezier(0.16,1,0.3,1); }
.rp-faq2-item.is-open .rp-faq2-a-wrap { grid-template-rows: 1fr; }
.rp-faq2-a-inner { overflow: hidden; }
.rp-faq2-a-inner p { margin: 0; padding: 0 22px 20px; font-size: 0.89rem; line-height: 1.68; color: rgba(7,17,29,0.58); }
@media (prefers-reduced-motion: reduce) {
  .rp-faq2-a-wrap, .rp-faq2-icon::before, .rp-faq2-icon::after { transition: none; }
}
@media (max-width: 600px) {
  .rp-faq2-q { padding: 16px 18px; font-size: 0.92rem; }
  .rp-faq2-a-inner p { padding: 0 18px 16px; }
}

/* ── Related services (compact) ───────────────────────────── */
.rp-relsvc-list { display: flex; flex-direction: column; margin-top: clamp(20px, 3vh, 28px); }
.rp-relsvc-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid rgba(9,19,31,0.10);
  text-decoration: none;
  color: #07111D;
  transition: padding-left 200ms ease;
}
.rp-relsvc-row:first-child { border-top: 1px solid rgba(9,19,31,0.10); }
.rp-relsvc-row:hover { padding-left: 8px; }
.rp-relsvc-row:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: -2px; }
.rp-relsvc-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
.rp-relsvc-icon { flex-shrink: 0; display: flex; color: #A9802F; opacity: 0.72; }
.rp-relsvc-label { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 1.02rem; font-weight: 800; letter-spacing: -0.015em; }
.rp-relsvc-arrow { color: #A9802F; font-size: 0.9rem; flex-shrink: 0; }

/* ── CCTV packages / "Every System Includes" (optional, per-service) ── */
.rp-cctv { text-align: center; }
.rp-cctv .rp-h2 { margin: 0 0 12px; }
.rp-cctv .rp-section-body { max-width: 620px; margin: 0 auto; }
.rp-cctv-includes {
  margin: clamp(32px, 5vh, 44px) auto 0;
  max-width: 520px;
  text-align: left;
  background: #FDFCF8;
  border: 1px solid rgba(9,19,31,0.08);
  border-radius: 16px;
  padding: clamp(24px, 4vw, 34px) clamp(24px, 4vw, 38px);
  box-shadow: 0 10px 30px rgba(7,17,29,0.06);
}
.rp-cctv-includes-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A9802F;
  margin: 0 0 18px;
}
.rp-cctv-includes-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
.rp-cctv-includes-list li { display: flex; align-items: flex-start; gap: 12px; }
.rp-cctv-check {
  flex-shrink: 0;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: rgba(201,162,74,0.12);
  color: #A9802F;
  display: flex; align-items: center; justify-content: center;
  margin-top: 1px;
}
.rp-cctv-includes-list span:last-child {
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(7,17,29,0.75);
  font-weight: 500;
}
@media (max-width: 640px) {
  .rp-cctv-includes { padding: 24px 22px; }
}

/* ── Final CTA ─────────────────────────────────────────────── */
.rp-final-cta { text-align: center; background: #0a0d12; }
.rp-final-cta-inner { max-width: 540px; margin: 0 auto; }
.rp-final-cta-h { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(1.8rem, 3.6vw, 2.6rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.08; color: #F4F1EA; margin: 0 0 16px; }
.rp-final-cta-p { font-size: clamp(0.9rem, 1.3vw, 1rem); line-height: 1.72; color: rgba(244,241,234,0.55); margin: 0 0 32px; }
.rp-final-ctas { display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; }
.rp-final-phone { color: rgba(244,241,234,0.75); text-decoration: none; font-weight: 700; font-size: 0.9rem; border-bottom: 1px solid rgba(244,241,234,0.25); padding-bottom: 2px; transition: color 180ms ease, border-color 180ms ease; }
.rp-final-phone:hover { color: #E8C97A; border-color: rgba(201,162,74,0.6); }
.rp-final-phone:focus-visible { outline: 2px solid rgba(201,162,74,0.8); outline-offset: 3px; }

@media (max-width: 600px) {
  .rp-hero-ctas { flex-direction: column; align-items: flex-start; gap: 14px; }
  .rp-btn-primary { width: 100%; justify-content: center; }
}
`

const FaqItem = ({ q, a, isOpen, onToggle, idx }) => (
  <div className="rp-faq-item">
    <button
      type="button"
      className="rp-faq-q"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`rp-faq-a-${idx}`}
      id={`rp-faq-q-${idx}`}
    >
      <span>{q}</span>
      <span className={`rp-faq-icon${isOpen ? ' is-open' : ''}`} aria-hidden="true">+</span>
    </button>
    <div className={`rp-faq-a-wrap${isOpen ? ' is-open' : ''}`} id={`rp-faq-a-${idx}`} role="region" aria-labelledby={`rp-faq-q-${idx}`}>
      <div className="rp-faq-a-inner"><p>{a}</p></div>
    </div>
  </div>
)

const FaqItem2 = ({ q, a, isOpen, onToggle, idx }) => (
  <div className={`rp-faq2-item${isOpen ? ' is-open' : ''}`}>
    <button
      type="button"
      className="rp-faq2-q"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`rp-faq2-a-${idx}`}
      id={`rp-faq2-q-${idx}`}
    >
      <span>{q}</span>
      <span className="rp-faq2-icon" aria-hidden="true" />
    </button>
    <div className="rp-faq2-a-wrap" id={`rp-faq2-a-${idx}`} role="region" aria-labelledby={`rp-faq2-q-${idx}`}>
      <div className="rp-faq2-a-inner"><p>{a}</p></div>
    </div>
  </div>
)

// Each word gets an overflow:hidden mask + inner animated span — mirrors Statement.jsx
const WordMask = ({ children, innerRef }) => (
  <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.15em' }}>
    <span ref={innerRef} style={{ display: 'inline-block' }}>{children}</span>
  </span>
)

const PositioningStatement = ({ eyebrow, heading, body, watermarkLg = false, ctaLabel, ctaHref }) => {
  const sectionRef   = useRef(null)
  const headlineRef  = useRef(null)
  const ruleRef      = useRef(null)
  const paraRef      = useRef(null)
  const wordRefs     = useRef([])
  const watermarkRef = useRef(null)

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const words = wordRefs.current.filter(Boolean)

      if (watermarkLg && watermarkRef.current) {
        if (rm) {
          gsap.set(watermarkRef.current, { opacity: 1 })
        } else {
          gsap.from(watermarkRef.current, {
            opacity: 0,
            x: -36,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
          })
          gsap.to(watermarkRef.current, {
            y: 26,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          })
        }
      }

      gsap.from(ruleRef.current, {
        scaleX: 0,
        duration: 0.7,
        ease: 'power2.out',
        transformOrigin: 'center center',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
      })

      if (rm) {
        gsap.from([...words, paraRef.current], {
          opacity: 0,
          duration: 0.5,
          stagger: 0.06,
          scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' },
        })
        return
      }

      gsap.from(words, {
        yPercent: 110,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: { trigger: headlineRef.current, start: 'top 84%' },
      })

      gsap.from(paraRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.75,
        ease: 'power2.out',
        delay: 0.35,
        scrollTrigger: { trigger: paraRef.current, start: 'top 89%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [watermarkLg])

  let wordIndex = -1

  return (
    <section ref={sectionRef} className="rp-section rp-section-sage rp-positioning" aria-label="Positioning statement">
      <div
        ref={watermarkRef}
        className={`rp-positioning-watermark${watermarkLg ? ' rp-positioning-watermark-lg' : ''}`}
        aria-hidden="true"
      ><LogoMark /></div>
      <div className="rp-inner rp-positioning-inner">
        <div ref={ruleRef} className="rp-positioning-rule" aria-hidden="true" />
        {eyebrow && <p className="rp-section-eyebrow">{eyebrow}</p>}
        <h2 ref={headlineRef}>
          {heading.map((line, li) => {
            const words = line.split(' ')
            return (
              <span key={li} style={{ display: 'block' }}>
                {words.map((word, wi) => {
                  wordIndex += 1
                  const idx = wordIndex
                  return (
                    <span key={wi}>
                      <WordMask innerRef={(el) => { wordRefs.current[idx] = el }}>{word}</WordMask>
                      {wi < words.length - 1 ? ' ' : ''}
                    </span>
                  )
                })}
              </span>
            )
          })}
        </h2>
        <p ref={paraRef}>{body}</p>
        {ctaLabel && (
          <a href={ctaHref || '#'} className="rp-introfeature-cta" style={{ marginTop: '4px' }}>
            {ctaLabel} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </section>
  )
}

/* Three-part intro. `animated` is opt-in per service — when false, renders
   exactly as before with no GSAP involvement, so unflagged pages are untouched. */
const IntroGrid = ({ items }) => {
  const sectionRef = useRef(null)
  const itemRefs   = useRef([])
  const wordRefs   = useRef([])
  const svgRefs    = useRef([])
  const ruleRefs   = useRef([])

  // Size each underline off the actual rendered word width (105–120% of it)
  // instead of a CSS percentage-of-fit-content, which is what let it stretch
  // to the column/viewport width on some mobile browsers.
  useEffect(() => {
    const sizeRules = () => {
      // Batch all layout reads before any writes, so sizing 3 underlines
      // doesn't force 3 separate synchronous reflows.
      const sizes = wordRefs.current.map((wordEl, i) => {
        const svgEl = svgRefs.current[i]
        if (!wordEl || !svgEl) return null
        const w = Math.round(wordEl.offsetWidth * 1.14)
        return { svgEl, w, h: Math.round(w * (16 / 120)) }
      })
      sizes.forEach((s) => {
        if (!s) return
        s.svgEl.style.width = `${s.w}px`
        s.svgEl.style.height = `${s.h}px`
      })
    }

    sizeRules()
    window.addEventListener('resize', sizeRules)
    return () => window.removeEventListener('resize', sizeRules)
  }, [items])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const els   = itemRefs.current.filter(Boolean)
      const rules = ruleRefs.current.filter(Boolean)

      if (rm) {
        gsap.set(els, { opacity: 1, x: 0 })
        rules.forEach((rule) => gsap.set(rule, { strokeDashoffset: 0 }))
        return
      }

      els.forEach((el, i) => {
        const fromX = i % 2 === 0 ? 52 : -52   // 1st right, 2nd left, 3rd right...
        gsap.set(el, { opacity: 0, x: fromX })

        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 0.95,
          ease: 'power3.out',
          delay: i * 0.13,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })

        const rule = ruleRefs.current[i]
        if (rule) {
          const len = rule.getTotalLength()
          gsap.set(rule, { strokeDasharray: len, strokeDashoffset: len })
          gsap.to(rule, {
            strokeDashoffset: 0,
            duration: 0.7,
            ease: 'power2.inOut',
            delay: i * 0.13 + 0.55,
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="rp-section rp-intro-section" aria-label="How IronOak approaches this work">
      <div className="rp-inner">
        <div className="rp-intro-grid">
          {items.map((item, i) => (
            <div
              key={item.label}
              ref={(el) => { itemRefs.current[i] = el }}
              className="rp-intro-col"
            >
              <div className="rp-intro-word-wrap">
                <p ref={(el) => { wordRefs.current[i] = el }} className="rp-intro-word">{item.label}</p>
                <svg
                  ref={(el) => { svgRefs.current[i] = el }}
                  className="rp-intro-rule"
                  viewBox="0 0 120 16"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={`rp-intro-rule-grad-${i}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#A9802F" />
                      <stop offset="100%" stopColor="#E8C97A" />
                    </linearGradient>
                  </defs>
                  <path
                    ref={(el) => { ruleRefs.current[i] = el }}
                    d="M2,8 C13,6.5 19,9 32,7.5 C45,6 53,9 66,7.5 C79,6 88,9 100,7.5 C106,6.5 111,8 116,7"
                    fill="none"
                    stroke={`url(#rp-intro-rule-grad-${i})`}
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <p className="rp-intro-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Related-services row icons — small, subtle, one per service slug ── */
const IconWrench = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
  </svg>
)
const IconSettings = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 13.5a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.9 2.9l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6V20a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.9-2.9l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H2a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.9-2.9l.1.1a1.7 1.7 0 001.9.3H8.5a1.7 1.7 0 001-1.6V2a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.9 2.9l-.1.1a1.7 1.7 0 00-.3 1.9v.1a1.7 1.7 0 001.6 1H22a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z" />
  </svg>
)
const IconBuilding = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 8h1M14 8h1M9 12h1M14 12h1" />
    <path d="M10 21v-3h4v3" />
  </svg>
)
const IconPaintRoller = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="13" height="6" rx="1.5" />
    <path d="M8.5 10v4" />
    <rect x="5.5" y="14" width="6" height="7" rx="1" />
  </svg>
)
const IconClipboard = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="4" width="12" height="16" rx="1.5" />
    <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    <path d="M9 10h6M9 13h6M9 16h3" />
  </svg>
)
const RELSVC_ICONS = {
  'property-maintenance-repairs':   IconWrench,
  'installations-property-systems': IconSettings,
  'exterior-outdoor-improvements':  IconBuilding,
  'interior-finishing':             IconPaintRoller,
  'capital-project-management':     IconClipboard,
}

const RelSvcIcon = ({ slug }) => {
  const Icon = RELSVC_ICONS[slug]
  return Icon ? <Icon /> : null
}

/* ── Capabilities-grid icons (optional per-service icon section) ── */
const IconCamera = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="14" height="10" rx="2" />
    <path d="M16 10l5-2.5v9L16 14" />
    <circle cx="9" cy="12" r="2.5" />
  </svg>
)
const IconMonitor = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M8 20h8M12 16v4" />
    <path d="M8.5 10.5l2 2 4.5-4.5" />
  </svg>
)
const IconShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9.5 12l1.8 1.8L15 10" />
  </svg>
)
const IconClipboardCheck = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="4" width="12" height="16" rx="1.5" />
    <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    <path d="M9 13l2 2 4-4" />
  </svg>
)
const CAP_ICONS = { camera: IconCamera, monitor: IconMonitor, shield: IconShield, clipboardCheck: IconClipboardCheck }
const CapIcon = ({ name }) => {
  const Icon = CAP_ICONS[name]
  return Icon ? <Icon /> : null
}

const ImgPlaceholder = ({ label }) => (
  <div className="rp-typical-img-placeholder" aria-hidden="true">
    {label && <span className="rp-placeholder-label">{label}</span>}
    <span className="rp-placeholder-note">Image coming soon</span>
  </div>
)

const PhotoBanner = ({ pb }) => (
  <section
    className={`rp-section rp-photobanner${pb.sideBySide ? ' rp-photobanner-sidebyside' : ''}`}
    aria-label={pb.heading}
  >
    <div className="rp-inner">
      <div
        className="rp-photobanner-img-wrap"
        style={{
          ...(pb.aspectRatio ? { aspectRatio: pb.aspectRatio } : null),
          ...(pb.maxWidth ? { maxWidth: pb.maxWidth, margin: '0 auto', marginBottom: 'clamp(24px, 3.5vh, 32px)' } : null),
        }}
      >
        {pb.image ? (
          <img src={pb.image} alt={pb.imageAlt} loading="lazy" decoding="async" style={pb.imagePosition ? { objectPosition: pb.imagePosition } : undefined} />
        ) : (
          <ImgPlaceholder label={pb.placeholderLabel} />
        )}
      </div>
      <div className="rp-photobanner-caption">
        <h2 className="rp-h2">{pb.heading}</h2>
        <p className="rp-section-body">{pb.body}</p>
        {pb.list && (
          <ul className="rp-photobanner-list">
            {pb.list.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  </section>
)

const OverviewSection = ({ overview }) => (
  <section className="rp-section" aria-labelledby="rp-overview-h">
    <div className="rp-inner">
      <div className="rp-overview-grid">
        <div className="rp-overview-text">
          <p className="rp-section-eyebrow">{overview.eyebrow}</p>
          <h2 className="rp-h2" id="rp-overview-h">{overview.heading}</h2>
          {overview.paragraphs.map((p, i) => (
            <p key={i} className="rp-overview-p">{p}</p>
          ))}
        </div>
        <div
          className="rp-overview-img-wrap"
          style={overview.imagePositionMobile ? { '--rp-ov-mobile-pos': overview.imagePositionMobile } : undefined}
        >
          {overview.image ? (
            <img
              src={overview.image}
              alt={overview.imageAlt}
              loading="lazy"
              decoding="async"
              style={overview.imagePosition ? { objectPosition: overview.imagePosition } : undefined}
            />
          ) : (
            <ImgPlaceholder label={overview.placeholderLabel} />
          )}
        </div>
      </div>
    </div>
  </section>
)

const IndustriesStrip = ({ industries }) => (
  <section className="rp-industries">
    <div className="rp-industries-eyebrow-wrap">
      <p className="rp-industries-title">{industries.heading}</p>
    </div>
    <div className="rp-industries-banner" role="region" aria-label={industries.heading}>
      <ul style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
        {industries.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="rp-industries-track" aria-hidden="true">
        {[...industries.items, ...industries.items].map((item, i) => (
          <span key={i} className="rp-industries-item2">
            <span className="rp-industries-label">{item}</span>
            <span className="rp-industries-sep" aria-hidden="true"><span className="rp-industries-diamond" /></span>
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default function RichServiceTemplate({ service, relatedServices, relatedArticle }) {
  const [openFaq, setOpenFaq] = useState(null)
  const rc = service.richContent

  return (
    <>
      <style>{CSS}</style>
      <div className="rp-page">
        <Header ready={true} />

        {/* ════ HERO ════ */}
        <section className="rp-hero" aria-labelledby="rp-title">
          {rc.heroVideo ? (
            <video
              className="rp-hero-img"
              src={rc.heroVideo}
              poster={rc.heroImage}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label={rc.heroImageAlt}
              style={rc.heroImagePosition ? { objectPosition: rc.heroImagePosition } : undefined}
            />
          ) : rc.heroImage ? (
            <picture>
              {rc.heroImageDesktop && <source media="(min-width: 641px)" srcSet={rc.heroImageDesktop} />}
              <img
                className="rp-hero-img"
                src={rc.heroImage}
                alt={rc.heroImageAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                style={rc.heroImagePosition ? { objectPosition: rc.heroImagePosition } : undefined}
              />
            </picture>
          ) : (
            <div className="rp-hero-img rp-hero-img-placeholder" aria-hidden="true">
              {rc.heroPlaceholderLabel && <span className="rp-placeholder-label">{rc.heroPlaceholderLabel}</span>}
              <span className="rp-placeholder-note">Photography pending</span>
            </div>
          )}
          <div
            className="rp-hero-overlay"
            aria-hidden="true"
            style={rc.heroOverlayLight ? {
              background:
                'linear-gradient(180deg, rgba(7,17,29,0.38) 0%, rgba(7,17,29,0.22) 35%, rgba(7,17,29,0.62) 100%),' +
                'linear-gradient(90deg, rgba(7,17,29,0.38) 0%, rgba(7,17,29,0.08) 45%, rgba(7,17,29,0.08) 100%)',
            } : undefined}
          />
          <div className="rp-hero-content">
            <div className="rp-inner">
              <p className="rp-eyebrow">{service.category}</p>
              <h1 className="rp-h1" id="rp-title">
                {rc.heroHeading[0]}
                {rc.heroHeading[1] && <><br />{rc.heroHeading[1]}</>}
              </h1>
              <p className="rp-hero-desc">{service.description}</p>

              <div className="rp-hero-ctas">
                <Link to="/#contact" className="rp-btn-primary">Discuss Your Project</Link>
              </div>

              <p className="rp-hero-props">{rc.heroSupportingLine}</p>
            </div>
          </div>
        </section>

        {/* ════ POSITIONING STATEMENT — early variant (optional, before Assess/Install/Integrate) ════ */}
        {rc.positioning && rc.positioning.early && (
          <PositioningStatement
            eyebrow={rc.positioning.eyebrow}
            heading={rc.positioning.heading}
            body={rc.positioning.body}
            watermarkLg={rc.positioning.watermarkLg}
            ctaLabel={rc.positioning.ctaLabel}
            ctaHref={rc.positioning.ctaHref}
          />
        )}

        {/* ════ THREE-PART INTRODUCTION (optional) ════ */}
        {rc.intro && <IntroGrid items={rc.intro} />}

        {/* ════ POSITIONING STATEMENT — default position (optional) ════ */}
        {rc.positioning && !rc.positioning.early && (
          <PositioningStatement
            eyebrow={rc.positioning.eyebrow}
            heading={rc.positioning.heading}
            body={rc.positioning.body}
            watermarkLg={rc.positioning.watermarkLg}
            ctaLabel={rc.positioning.ctaLabel}
            ctaHref={rc.positioning.ctaHref}
          />
        )}

        {/* ════ TYPICAL SERVICE WORK (photography-led) ════ */}
        <section
          className={`rp-section ${rc.typicalProjects.dark ? 'rp-section-dark' : 'rp-section-sage'}`}
          data-navbar={rc.typicalProjects.dark ? 'invert' : undefined}
          aria-labelledby="rp-typical-h"
        >
          <div className="rp-inner">
            <h2 className="rp-h2" id="rp-typical-h">{rc.typicalProjects.heading}</h2>
            <div className={`rp-typical-grid${rc.typicalProjects.wideCards ? ' rp-typical-grid-2col' : ''}${rc.typicalProjects.centerLastOdd ? ' rp-typical-grid-2col-center-last' : ''}`}>
              {rc.typicalProjects.groups.map((group) => (
                <div key={group.title} className="rp-typical-card">
                  <div className="rp-typical-img-wrap" style={group.objectFit === 'contain' ? { background: '#DED8C7' } : undefined}>
                    {group.image ? (
                      <img
                        src={group.image}
                        alt={group.imageAlt || group.title}
                        loading="lazy"
                        decoding="async"
                        style={{
                          ...(group.imagePosition ? { objectPosition: group.imagePosition } : null),
                          ...(group.objectFit ? { objectFit: group.objectFit } : null),
                        }}
                      />
                    ) : (
                      <ImgPlaceholder label={group.placeholderLabel || group.title} />
                    )}
                  </div>
                  <p className="rp-typical-num">{group.num}</p>
                  <h3 className="rp-typical-title">{group.title}</h3>
                  <p className="rp-typical-body">{group.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ INDUSTRIES STRIP — early slot (optional, per-service unique section) ════ */}
        {rc.industries && rc.industries.beforeServiceList && <IndustriesStrip industries={rc.industries} />}

        {/* ════ SERVICE SCOPE LIST (optional) ════ */}
        {rc.serviceList && (
          <section className="rp-section rp-section-sage" aria-labelledby="rp-services-h">
            <div className="rp-inner">
              <h2 className="rp-h2" id="rp-services-h">{rc.serviceList.heading}</h2>
              <p className="rp-section-body">{rc.serviceList.body}</p>
              {rc.serviceList.emphasized ? (
                <div className="rp-list-grid-emphasized" role="list">
                  {rc.serviceList.items.map((item, i) => (
                    <div key={item} className="rp-list-row-emphasized" role="listitem">
                      <span className="rp-list-num-emphasized">{String(i + 1).padStart(2, '0')}</span>
                      <span className="rp-list-label-emphasized">{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rp-list-grid" role="list">
                  {rc.serviceList.items.map((item, i) => (
                    <div key={item} className="rp-list-row" role="listitem">
                      <span className="rp-list-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="rp-list-label">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ════ CAPABILITIES (icon grid, optional, per-service unique section) ════ */}
        {rc.capabilities && (
          <section className="rp-section rp-section-sage" aria-labelledby="rp-cap-h">
            <div className="rp-inner">
              {rc.capabilities.eyebrow && <p className="rp-section-eyebrow">{rc.capabilities.eyebrow}</p>}
              <h2 className="rp-h2" id="rp-cap-h">{rc.capabilities.heading}</h2>
              {rc.capabilities.body && <p className="rp-section-body">{rc.capabilities.body}</p>}
              <div className="rp-cap-grid">
                {rc.capabilities.items.map((item) => (
                  <div key={item.title} className="rp-cap-card">
                    <div className="rp-cap-icon-wrap">
                      {item.image ? (
                        <img className="rp-cap-icon-img" src={item.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                      ) : (
                        <CapIcon name={item.icon} />
                      )}
                    </div>
                    <p className="rp-cap-title">{item.title}</p>
                    <p className="rp-cap-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════ INDUSTRIES STRIP — default slot (optional, per-service unique section) ════ */}
        {rc.industries && !rc.industries.beforeServiceList && <IndustriesStrip industries={rc.industries} />}

        {/* ════ SERVICE OVERVIEW (optional) ════ */}
        {rc.overview && !rc.overviewAfterBenefits && <OverviewSection overview={rc.overview} />}

        {/* ════ CCTV PACKAGES (optional, per-service unique section) ════ */}
        {rc.cctvPackages && (
          <section className="rp-section rp-cctv rp-section-dark" data-navbar="invert" aria-labelledby="rp-cctv-h">
            <div className="rp-inner-narrow">
              <p className="rp-section-eyebrow">{rc.cctvPackages.eyebrow}</p>
              <h2 className="rp-h2" id="rp-cctv-h">{rc.cctvPackages.heading}</h2>
              <p className="rp-section-body">{rc.cctvPackages.body}</p>
              <div className="rp-cctv-includes">
                <p className="rp-cctv-includes-title">{rc.cctvPackages.includesTitle || 'Every System Includes'}</p>
                <ul className="rp-cctv-includes-list">
                  {rc.cctvPackages.includes.map((item) => (
                    <li key={item}>
                      <span className="rp-cctv-check" aria-hidden="true">
                        <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 7l3 3 6-5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ════ APPROACH NOTE (optional, per-service unique section) ════ */}
        {rc.approachNote && (
          <section className="rp-section" aria-labelledby="rp-approach-h">
            <div className="rp-inner">
              <p className="rp-section-eyebrow">{rc.approachNote.eyebrow}</p>
              <h2 className="rp-h2" id="rp-approach-h">{rc.approachNote.heading}</h2>
              <p className="rp-section-body">{rc.approachNote.body}</p>
              <div className="rp-approach-grid">
                {rc.approachNote.items.map((item) => (
                  <div key={item.label} className="rp-approach-item">
                    <p className="rp-approach-label">{item.label}</p>
                    <p className="rp-approach-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════ PHOTO BANNER (optional, per-service unique section) ════ */}
        {rc.photoBanner && !rc.photoBannerAfterBenefits && <PhotoBanner pb={rc.photoBanner} />}

        {/* ════ PROCESS CHAIN (optional, per-service unique section) ════ */}
        {rc.processSteps && (
          <section
            className={`rp-section ${rc.processSteps.dark ? 'rp-section-dark' : ''}`}
            data-navbar={rc.processSteps.dark ? 'invert' : undefined}
            aria-labelledby="rp-process-h"
          >
            <div className="rp-inner">
              <h2 className="rp-h2" id="rp-process-h">{rc.processSteps.heading}</h2>
              {rc.processSteps.body && <p className="rp-section-body">{rc.processSteps.body}</p>}
              <div className="rp-process-chain">
                {rc.processSteps.steps.map((step, i) => (
                  <div key={step.label} className="rp-process-step">
                    <div className="rp-process-step-inner">
                      <p className="rp-process-num">{step.num}</p>
                      <p className="rp-process-label">{step.label}</p>
                    </div>
                    {i < rc.processSteps.steps.length - 1 && <span className="rp-process-arrow" aria-hidden="true">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════ DARK BENEFITS (optional) ════ */}
        {rc.benefits && (
          <section className="rp-section rp-section-dark" data-navbar="invert" aria-labelledby="rp-benefits-h">
            <div className="rp-inner">
              <h2 className="rp-h2" id="rp-benefits-h">{rc.benefits.heading}</h2>
              <div className="rp-benefits-grid">
                {rc.benefits.items.map((b, i) => (
                  <div key={b.title} className="rp-benefit-card">
                    <p className="rp-benefit-num">{String(i + 1).padStart(2, '0')}</p>
                    <p className="rp-benefit-title">{b.title}</p>
                    <p className="rp-benefit-body">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {rc.overview && rc.overviewAfterBenefits && <OverviewSection overview={rc.overview} />}

        {rc.photoBanner && rc.photoBannerAfterBenefits && <PhotoBanner pb={rc.photoBanner} />}

        {/* ════ RELATED INSIGHT ════ */}
        {relatedArticle && (
          <section className="rp-section" aria-labelledby="rp-insight-h">
            <div className="rp-inner">
              <h2 className="rp-h2" id="rp-insight-h">Related insight</h2>
              <Link to={`/insights/${relatedArticle.slug}`} className="rp-insight-card">
                <div className="rp-insight-img">
                  <img src={relatedArticle.featuredImage} alt={relatedArticle.featuredImageAlt} loading="lazy" decoding="async" />
                </div>
                <div>
                  <p className="rp-insight-cat">{relatedArticle.category}</p>
                  <p className="rp-insight-title">{relatedArticle.shortTitle || relatedArticle.title}</p>
                  <p className="rp-insight-excerpt">{relatedArticle.excerpt}</p>
                  <div className="rp-insight-meta">
                    <span>{relatedArticle.readingTime}</span>
                    <span className="rp-insight-read">Read Article →</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ════ FAQ (optional) ════ */}
        {rc.faqs && rc.faqs.length > 0 && (
          rc.faqEyebrow ? (
            <section className="rp-section rp-faq2-section" aria-labelledby="rp-faq-h">
              <div className="rp-inner-narrow">
                <p className="rp-section-eyebrow">{rc.faqEyebrow}</p>
                <h2 className="rp-h2" id="rp-faq-h">Frequently asked questions</h2>
                {rc.faqIntro && <p className="rp-section-body">{rc.faqIntro}</p>}
                <div className="rp-faq2-list">
                  {rc.faqs.map((faq, i) => (
                    <FaqItem2
                      key={faq.q}
                      idx={i}
                      q={faq.q}
                      a={faq.a}
                      isOpen={openFaq === i}
                      onToggle={() => setOpenFaq((prev) => (prev === i ? null : i))}
                    />
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="rp-section" aria-labelledby="rp-faq-h">
              <div className="rp-inner">
                <h2 className="rp-h2" id="rp-faq-h">Frequently asked questions</h2>
                <div className="rp-faq-list">
                  {rc.faqs.map((faq, i) => (
                    <FaqItem
                      key={faq.q}
                      idx={i}
                      q={faq.q}
                      a={faq.a}
                      isOpen={openFaq === i}
                      onToggle={() => setOpenFaq((prev) => (prev === i ? null : i))}
                    />
                  ))}
                </div>
              </div>
            </section>
          )
        )}

        {/* ════ RELATED SERVICES ════ */}
        <section className="rp-section" aria-labelledby="rp-relsvc-h">
          <div className="rp-inner-narrow">
            <p className="rp-section-eyebrow" id="rp-relsvc-h">Related Services</p>
            <div className="rp-relsvc-list">
              {relatedServices.map((rel) => (
                <Link key={rel.slug} to={`/services/${rel.slug}`} className="rp-relsvc-row">
                  <span className="rp-relsvc-left">
                    <span className="rp-relsvc-icon"><RelSvcIcon slug={rel.slug} /></span>
                    <span className="rp-relsvc-label">{rel.title}</span>
                  </span>
                  <span className="rp-relsvc-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════ FINAL CTA ════ */}
        <section className="rp-section rp-section-dark rp-final-cta" data-navbar="invert" aria-label="Request a quote">
          <div className="rp-inner">
            <div className="rp-final-cta-inner">
              <h2 className="rp-final-cta-h">{rc.finalCta.heading}</h2>
              <p className="rp-final-cta-p">{rc.finalCta.body}</p>
              <div className="rp-final-ctas">
                <Link to="/#contact" className="rp-btn-primary">Discuss Your Project</Link>
                <a href={rc.finalCta.phoneHref} className="rp-final-phone">Call {rc.finalCta.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  )
}
