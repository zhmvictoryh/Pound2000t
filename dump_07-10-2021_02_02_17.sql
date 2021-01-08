--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Card; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."Card" (
    "cardId" integer NOT NULL,
    "cardName" text NOT NULL,
    "cardDescription" character varying(700) NOT NULL,
    "cheerUp" character varying(700) NOT NULL,
    "imageResult" character varying(500) NOT NULL
);


ALTER TABLE public."Card" OWNER TO ibearyou;

--
-- Name: Diary; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."Diary" (
    "diaryId" integer NOT NULL,
    date date NOT NULL,
    title character varying(100),
    good character varying(250),
    bad character varying(250),
    wish character varying(250),
    feel text NOT NULL,
    "createDate" timestamp with time zone NOT NULL,
    "updateDate" timestamp with time zone,
    "diaryPic" character varying(500)
);


ALTER TABLE public."Diary" OWNER TO ibearyou;

--
-- Name: Question; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."Question" (
    "questionId" integer NOT NULL,
    detail character varying(300),
    choices character varying(500),
    "nextQuestionId" integer
);


ALTER TABLE public."Question" OWNER TO ibearyou;

--
-- Name: QuestionType; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."QuestionType" (
    "quesTypeId" integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public."QuestionType" OWNER TO ibearyou;

--
-- Name: Questionnaire_Question; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."Questionnaire_Question" (
    "questionId" integer NOT NULL,
    "questionnaireId" integer NOT NULL,
    create_date timestamp with time zone
);


ALTER TABLE public."Questionnaire_Question" OWNER TO ibearyou;

--
-- Name: Questionnaires; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."Questionnaires" (
    "questionnaireId" integer NOT NULL,
    questionnaire character varying(100),
    "nextQuestionnaireId" integer
);


ALTER TABLE public."Questionnaires" OWNER TO ibearyou;

--
-- Name: Resutl; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."Resutl" (
    "resultId" integer NOT NULL,
    "userPrompt" character varying(500),
    "createDate" timestamp with time zone NOT NULL,
    "updateDate" timestamp with time zone
);


ALTER TABLE public."Resutl" OWNER TO ibearyou;

--
-- Name: User; Type: TABLE; Schema: public; Owner: ibearyou
--

CREATE TABLE public."User" (
    "userId" integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    password character varying(45) NOT NULL,
    email character varying(45) NOT NULL,
    birthday date NOT NULL,
    "profilePic" character varying(500),
    "createDate" timestamp with time zone NOT NULL,
    "updateDate" timestamp with time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO ibearyou;

--
-- Name: User_userId_seq; Type: SEQUENCE; Schema: public; Owner: ibearyou
--

ALTER TABLE public."User" ALTER COLUMN "userId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."User_userId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: Card; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."Card" ("cardId", "cardName", "cardDescription", "cheerUp", "imageResult") FROM stdin;
\.


--
-- Data for Name: Diary; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."Diary" ("diaryId", date, title, good, bad, wish, feel, "createDate", "updateDate", "diaryPic") FROM stdin;
\.


--
-- Data for Name: Question; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."Question" ("questionId", detail, choices, "nextQuestionId") FROM stdin;
\.


--
-- Data for Name: QuestionType; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."QuestionType" ("quesTypeId", name) FROM stdin;
\.


--
-- Data for Name: Questionnaire_Question; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."Questionnaire_Question" ("questionId", "questionnaireId", create_date) FROM stdin;
\.


--
-- Data for Name: Questionnaires; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."Questionnaires" ("questionnaireId", questionnaire, "nextQuestionnaireId") FROM stdin;
\.


--
-- Data for Name: Resutl; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."Resutl" ("resultId", "userPrompt", "createDate", "updateDate") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: ibearyou
--

COPY public."User" ("userId", "firstName", "lastName", password, email, birthday, "profilePic", "createDate", "updateDate") FROM stdin;
\.


--
-- Name: User_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: ibearyou
--

SELECT pg_catalog.setval('public."User_userId_seq"', 1, false);


--
-- Name: Card Card_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."Card"
    ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("cardId");


--
-- Name: Diary Diary_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."Diary"
    ADD CONSTRAINT "Diary_pkey" PRIMARY KEY ("diaryId");


--
-- Name: QuestionType QuestionType_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."QuestionType"
    ADD CONSTRAINT "QuestionType_pkey" PRIMARY KEY ("quesTypeId");


--
-- Name: Question Question_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."Question"
    ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("questionId");


--
-- Name: Questionnaire_Question Questionnaire_Question_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."Questionnaire_Question"
    ADD CONSTRAINT "Questionnaire_Question_pkey" PRIMARY KEY ("questionId", "questionnaireId");


--
-- Name: Questionnaires Questionnaires_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."Questionnaires"
    ADD CONSTRAINT "Questionnaires_pkey" PRIMARY KEY ("questionnaireId");


--
-- Name: Resutl Resutl_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."Resutl"
    ADD CONSTRAINT "Resutl_pkey" PRIMARY KEY ("resultId");


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: ibearyou
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");


--
-- PostgreSQL database dump complete
--

