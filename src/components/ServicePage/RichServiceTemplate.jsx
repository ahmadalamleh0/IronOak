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
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
}
.rp-hero-img-placeholder span {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(232,201,122,0.5);
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
.rp-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.rp-breadcrumb a, .rp-breadcrumb span {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: rgba(244,241,234,0.55);
  transition: color 180ms ease;
}
.rp-breadcrumb a:hover { color: #E8C97A; }
.rp-breadcrumb a:focus-visible { outline: 2px solid rgba(201,162,74,0.7); outline-offset: 2px; border-radius: 3px; }
.rp-breadcrumb-sep { color: rgba(244,241,234,0.30); font-size: 0.65rem; }
.rp-breadcrumb-current { color: rgba(244,241,234,0.85) !important; }

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
.rp-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 50px;
  padding: 0 6px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(244,241,234,0.85);
  text-decoration: none;
  border-bottom: 1px solid rgba(244,241,234,0.25);
  transition: color 180ms ease, border-color 180ms ease;
}
.rp-btn-secondary:hover { color: #E8C97A; border-color: rgba(201,162,74,0.6); }
.rp-btn-secondary:focus-visible { outline: 2px solid rgba(201,162,74,0.8); outline-offset: 3px; }
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
.rp-intro-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(32px, 5vw, 56px);
}
.rp-intro-col { padding-left: clamp(0px, 3vw, 32px); border-left: 1px solid rgba(201,162,74,0.28); }
.rp-intro-col:first-child { padding-left: 0; border-left: none; }
.rp-intro-word {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #07111D;
  margin: 0 0 16px;
}
.rp-intro-body { font-size: 0.92rem; line-height: 1.7; color: rgba(7,17,29,0.55); margin: 0; }
@media (max-width: 760px) {
  .rp-intro-grid { grid-template-columns: 1fr; gap: 28px; }
  .rp-intro-col { padding-left: 0; border-left: none; padding-top: 24px; border-top: 1px solid rgba(201,162,74,0.28); }
  .rp-intro-col:first-child { padding-top: 0; border-top: none; }
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
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(28px, 4vw, 40px);
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
  align-items: center;
  justify-content: center;
  background: #DED8C7;
}
.rp-typical-img-placeholder span {
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(7,17,29,0.38);
}
.rp-typical-num { font-size: 0.66rem; font-weight: 800; letter-spacing: 0.2em; color: #A9802F; margin: 0 0 8px; }
.rp-typical-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 1.02rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #07111D;
  margin: 0 0 8px;
  line-height: 1.3;
}
.rp-typical-body { font-size: 0.87rem; line-height: 1.6; color: rgba(7,17,29,0.55); margin: 0; }
@media (max-width: 760px) {
  .rp-typical-grid { grid-template-columns: 1fr; gap: 36px; }
}

/* ── Approach note — compact statement + 3-item row (per-service unique section) ── */
.rp-approach-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
@media (max-width: 760px) {
  .rp-photobanner-img-wrap { aspect-ratio: 4 / 3; }
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
.rp-relsvc-label { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 1.02rem; font-weight: 800; letter-spacing: -0.015em; }
.rp-relsvc-arrow { color: #A9802F; font-size: 0.9rem; }

/* ── Final CTA ─────────────────────────────────────────────── */
.rp-final-cta { text-align: center; }
.rp-final-cta-inner { max-width: 540px; margin: 0 auto; }
.rp-final-cta-h { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(1.8rem, 3.6vw, 2.6rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.08; color: #F4F1EA; margin: 0 0 16px; }
.rp-final-cta-p { font-size: clamp(0.9rem, 1.3vw, 1rem); line-height: 1.72; color: rgba(244,241,234,0.55); margin: 0 0 32px; }
.rp-final-ctas { display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; }
.rp-final-phone { color: rgba(244,241,234,0.75); text-decoration: none; font-weight: 700; font-size: 0.9rem; border-bottom: 1px solid rgba(244,241,234,0.25); padding-bottom: 2px; transition: color 180ms ease, border-color 180ms ease; }
.rp-final-phone:hover { color: #E8C97A; border-color: rgba(201,162,74,0.6); }
.rp-final-phone:focus-visible { outline: 2px solid rgba(201,162,74,0.8); outline-offset: 3px; }

@media (max-width: 600px) {
  .rp-hero-ctas { flex-direction: column; align-items: flex-start; gap: 14px; }
  .rp-btn-primary, .rp-btn-secondary { width: 100%; justify-content: center; }
}
`

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

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

// Each word gets an overflow:hidden mask + inner animated span — mirrors Statement.jsx
const WordMask = ({ children, innerRef }) => (
  <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.15em' }}>
    <span ref={innerRef} style={{ display: 'inline-block' }}>{children}</span>
  </span>
)

const PositioningStatement = ({ heading, body }) => {
  const sectionRef  = useRef(null)
  const headlineRef = useRef(null)
  const ruleRef     = useRef(null)
  const paraRef     = useRef(null)
  const wordRefs    = useRef([])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const words = wordRefs.current.filter(Boolean)

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
  }, [])

  let wordIndex = -1

  return (
    <section ref={sectionRef} className="rp-section rp-section-sage rp-positioning" aria-label="Positioning statement">
      <div className="rp-positioning-watermark" aria-hidden="true"><LogoMark /></div>
      <div className="rp-inner rp-positioning-inner">
        <div ref={ruleRef} className="rp-positioning-rule" aria-hidden="true" />
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
      </div>
    </section>
  )
}

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
          {rc.heroImage ? (
            <img className="rp-hero-img" src={rc.heroImage} alt={rc.heroImageAlt} loading="eager" decoding="async" />
          ) : (
            <div className="rp-hero-img rp-hero-img-placeholder" aria-hidden="true"><span>Photography pending</span></div>
          )}
          <div className="rp-hero-overlay" aria-hidden="true" />
          <div className="rp-hero-content">
            <div className="rp-inner">
              <nav className="rp-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="rp-breadcrumb-sep" aria-hidden="true">/</span>
                <Link to="/#services-explorer">Services</Link>
                <span className="rp-breadcrumb-sep" aria-hidden="true">/</span>
                <span className="rp-breadcrumb-current" aria-current="page">{service.title}</span>
              </nav>

              <p className="rp-eyebrow">{service.category}</p>
              <h1 className="rp-h1" id="rp-title">
                {rc.heroHeading[0]}
                {rc.heroHeading[1] && <><br />{rc.heroHeading[1]}</>}
              </h1>
              <p className="rp-hero-desc">{service.description}</p>

              <div className="rp-hero-ctas">
                <Link to="/#contact" className="rp-btn-primary">Discuss Your Project</Link>
                <a href={rc.finalCta.phoneHref} className="rp-btn-secondary">
                  <PhoneIcon /> Call IronOak
                </a>
              </div>

              <p className="rp-hero-props">{rc.heroSupportingLine}</p>
            </div>
          </div>
        </section>

        {/* ════ THREE-PART INTRODUCTION ════ */}
        <section className="rp-section" aria-label="How IronOak approaches this work">
          <div className="rp-inner">
            <div className="rp-intro-grid">
              {rc.intro.map((item) => (
                <div key={item.label} className="rp-intro-col">
                  <p className="rp-intro-word">{item.label}</p>
                  <p className="rp-intro-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ POSITIONING STATEMENT ════ */}
        <PositioningStatement heading={rc.positioning.heading} body={rc.positioning.body} />

        {/* ════ TYPICAL SERVICE WORK (photography-led) ════ */}
        <section className="rp-section rp-section-sage" aria-labelledby="rp-typical-h">
          <div className="rp-inner">
            <h2 className="rp-h2" id="rp-typical-h">{rc.typicalProjects.heading}</h2>
            <div className="rp-typical-grid">
              {rc.typicalProjects.groups.map((group) => (
                <div key={group.title} className="rp-typical-card">
                  <div className="rp-typical-img-wrap">
                    {group.image ? (
                      <img src={group.image} alt={group.imageAlt || group.title} loading="lazy" decoding="async" />
                    ) : (
                      <div className="rp-typical-img-placeholder" aria-hidden="true">
                        <span>Image coming soon</span>
                      </div>
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

        {/* ════ SERVICE SCOPE LIST ════ */}
        <section className="rp-section rp-section-sage" aria-labelledby="rp-services-h">
          <div className="rp-inner">
            <h2 className="rp-h2" id="rp-services-h">{rc.serviceList.heading}</h2>
            <p className="rp-section-body">{rc.serviceList.body}</p>
            <div className="rp-list-grid" role="list">
              {rc.serviceList.items.map((item, i) => (
                <div key={item} className="rp-list-row" role="listitem">
                  <span className="rp-list-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="rp-list-label">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ SERVICE OVERVIEW ════ */}
        <section className="rp-section" aria-labelledby="rp-overview-h">
          <div className="rp-inner">
            <div className="rp-overview-grid">
              <div className="rp-overview-text">
                <p className="rp-section-eyebrow">{rc.overview.eyebrow}</p>
                <h2 className="rp-h2" id="rp-overview-h">{rc.overview.heading}</h2>
                {rc.overview.paragraphs.map((p, i) => (
                  <p key={i} className="rp-overview-p">{p}</p>
                ))}
              </div>
              <div className="rp-overview-img-wrap">
                {rc.overview.image ? (
                  <img src={rc.overview.image} alt={rc.overview.imageAlt} loading="lazy" decoding="async" />
                ) : (
                  <div className="rp-typical-img-placeholder" aria-hidden="true"><span>Image coming soon</span></div>
                )}
              </div>
            </div>
          </div>
        </section>

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
        {rc.photoBanner && (
          <section className="rp-section rp-photobanner" aria-label={rc.photoBanner.heading}>
            <div className="rp-inner">
              <div className="rp-photobanner-img-wrap">
                {rc.photoBanner.image ? (
                  <img src={rc.photoBanner.image} alt={rc.photoBanner.imageAlt} loading="lazy" decoding="async" />
                ) : (
                  <div className="rp-typical-img-placeholder" aria-hidden="true"><span>Image coming soon</span></div>
                )}
              </div>
              <div className="rp-photobanner-caption">
                <h2 className="rp-h2">{rc.photoBanner.heading}</h2>
                <p className="rp-section-body">{rc.photoBanner.body}</p>
              </div>
            </div>
          </section>
        )}

        {/* ════ DARK BENEFITS ════ */}
        <section className="rp-section rp-section-dark" aria-labelledby="rp-benefits-h">
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

        {/* ════ FAQ ════ */}
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

        {/* ════ RELATED SERVICES ════ */}
        <section className="rp-section" aria-labelledby="rp-relsvc-h">
          <div className="rp-inner-narrow">
            <p className="rp-section-eyebrow" id="rp-relsvc-h">Related Services</p>
            <div className="rp-relsvc-list">
              {relatedServices.map((rel) => (
                <Link key={rel.slug} to={`/services/${rel.slug}`} className="rp-relsvc-row">
                  <span className="rp-relsvc-label">{rel.title}</span>
                  <span className="rp-relsvc-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════ FINAL CTA ════ */}
        <section className="rp-section rp-section-dark rp-final-cta" aria-label="Request a quote">
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
