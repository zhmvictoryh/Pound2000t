const psql = require('../psqlAdapter').psql;

const question = {}

question.list_all = async (json) => {
    const ret = {}
    /*let sql = "SELECT Q.question_id, Q.detail, Q.next_question_id, QT.quest_type_id"
        sql += " FROM question Q, question_type QT WHERE Q.quest_type_id = QT.quest_type_id"*/

    let question =
        [{
            "questionId": "40001",
            "detail": "ปัญหาเรื่องเรียนกระทบต่อจิตใจเธอมากแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "อารมณ์ดีมาก", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "2", "desc": "อารมณ์ดี", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "3", "desc": "รู้สึกเฉยๆ", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "4", "desc": "ไม่ค่อยดีเลย", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "5", "desc": "รู้สึกเศร้า", "nextQuestionId": "40002", "choice_score": "0" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "40002",
            "detail": "เธอกําลังรู้สึกเศร้าหรือเครียดอยู่ใช่ไหม",
            "choices": [
                { "seq": "1", "desc": "ใช่", "nextQuestionId": "40003", "choice_score": "0" },
                { "seq": "2", "desc": "ไม่ใช่", "nextQuestionId": "40003", "choice_score": "0" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "40003",
            "detail": "เธอกําลังรู้สึกเศร้าหรือเครียดเรื่องอะไรอยู่",
            "choices": [
                { "seq": "1", "desc": "เรื่องเพื่อน", "nextQuestionId": "41001", "choice_score": "0" },
                { "seq": "2", "desc": "เรื่องเรียน", "nextQuestionId": "42001", "choice_score": "0" },
                { "seq": "3", "desc": "เรื่องครอบครัว", "nextQuestionId": "43001", "choice_score": "0" },
                { "seq": "4", "desc": "เรื่องความรัก", "nextQuestionId": "44001", "choice_score": "0" },
                { "seq": "5", "desc": "เรื่องการเงิน", "nextQuestionId": "46001", "choice_score": "0" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41001",
            "detail": "ตอนนี้ปัญหาเรื่องเพื่อนกระทบต่อจิตใจเธอมากแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "41001", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "42001", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "43001", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "44001", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "46001", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41002",
            "detail": "เธออยากปรับความเข้าใจกับเพื่อนไหม",
            "choices": [
                { "seq": "1", "desc": "อยากปรับความเข้าใจ", "nextQuestionId": "41003", "choice_score": "1" },
                { "seq": "2", "desc": "ไม่อยากปรับความเข้าใจ", "nextQuestionId": "41003", "choice_score": "5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41003",
            "detail": "หากตอนนี้เธอรู้สึกไม่ดีอยู่ ไม่เป็นไรนะ เราจะมาข้ามผ่านอุปสรรคนี้ไปด้วยกันนะโดยน้องหมีอยากให้เธอลองทบทวนดูว่าจริงๆแล้วปัญหาที่เกิดขึ้นเกิดจากอะไร",
            "choices": [
                { "seq": "1", "desc": "เกิดจากตัวเอง", "nextQuestionId": "41004", "choice_score": "1.5" },
                { "seq": "2", "desc": "เกิดจากคนอื่น", "nextQuestionId": "41004", "choice_score": "5.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41004",
            "detail": "ถ้าเธอกำลังรู้สึกผิดหรือ อยากที่จะขอโทษใครสักคนเธออยากแสดงออกทางใดมากกว่ากัน",
            "choices": [
                { "seq": "1", "desc": "แสดงออกแบบทางตรง", "nextQuestionId": "41005", "choice_score": "2" },
                { "seq": "2", "desc": "แสดงออกแบบทางอ้อม", "nextQuestionId": "41005", "choice_score": "6" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41005",
            "detail": "เธอกล้าที่จะไปปรับความเข้าใจกับเพื่อนก่อนหรือไม่",
            "choices": [
                { "seq": "1", "desc": "กล้าที่จะเข้าหาก่อน", "nextQuestionId": "41006", "choice_score": "2.5" },
                { "seq": "2", "desc": "ไม่กล้าที่จะเข้าหาก่อน", "nextQuestionId": "41006", "choice_score": "6.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41006",
            "detail": "เธอยังอยากที่จะรักษาความสัมพันธ์ของการเป็นเพื่อนอยู่ไหม",
            "choices": [
                { "seq": "1", "desc": "อยากเป็นเพื่อนต่อไป", "nextQuestionId": "41007", "choice_score": "3" },
                { "seq": "2", "desc": "ไม่อยากเป็นเพื่อนแล้ว", "nextQuestionId": "41007", "choice_score": "7" }
            ],
            "questionType": "1"
        },

       
        {
            "questionId": "42001",
            "detail": "ปัญหาเรื่องเรียนกระทบต่อจิตใจเธอมากแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "42002", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "42002", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "42002", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "42002", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "42002", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42002",
            "detail": "เธอกําลังรู้สึกท้อแท้เรื่องเรียนใช่ไหม",
            "choices": [
                { "seq": "1", "desc": "ใช่ รู้สึกท้อเเท้", "nextQuestionId": "42003", "choice_score": "15" },
                { "seq": "2", "desc": "ไม่ใช่ ไม่ได้รู้สึกท้อเเท้", "nextQuestionId": "42003", "choice_score": "11" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42003",
            "detail": "สาเหตุมาจากอะไรกันนะ เลือกสิ่งที่ตรงกับเธอมากที่สุด",
            "choices": [
                { "seq": "1", "desc": "ไม่ชอบสิ่งที่เรียนอยู่", "nextQuestionId": "42004", "choice_score": "2" },
                { "seq": "2", "desc": "ผลลัพธ์กับความพยายามสวนทางกัน", "nextQuestionId": "42004", "choice_score": "1" },
                { "seq": "3", "desc": "รู้สึกถึงความกดดันที่มากเกินไป", "nextQuestionId": "42004", "choice_score": "3" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42004",
            "detail": "เธอมาลองพยายามกันอีกสักครั้งกันไหม",
            "choices": [
                { "seq": "1", "desc": "อยากพยายาม", "nextQuestionId": "42005", "choice_score": "11.5" },
                { "seq": "2", "desc": "ไม่ไหวแล้ว", "nextQuestionId": "42005", "choice_score": "15.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42005",
            "detail": "เธอคิดว่าอะไรคือสิ่งที่ทำให้ไม่ชอบในการเรียน",
            "choices": [
                { "seq": "1", "desc": "รู้สึกว่าตัวเองตัดสินใจผิด", "nextQuestionId": "42006", "choice_score": "6" },
                { "seq": "2", "desc": "ไม่ได้กำหนดทางเลือกในการเรียนด้วยตัวเอง", "nextQuestionId": "42006", "choice_score": "5" },
                { "seq": "3", "desc": "เนื้อหาที่เรียนยากเกินไป", "nextQuestionId": "42006", "choice_score": "4" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42006",
            "detail": "ความรู้สึกกดดันที่เธอกำลังเผชิญอยู่นั้นเกิดมาจากอะไร",
            "choices": [
                { "seq": "1", "desc": "กดดันตนเองมากเกินไป", "nextQuestionId": "41007", "choice_score": "16" },
                { "seq": "2", "desc": "ได้รับความกดดันจากผู้อื่น", "nextQuestionId": "41007", "choice_score": "12" }
            ],
            "questionType": "1"
        },


        {
            "questionId": "43001",
            "detail": "ปัญหาครอบครัวของเธอกระทบต่อจิตใจเธอแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "43002", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "43002", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "43002", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "43002", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "43002", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43002",
            "detail": "เธออยากปรับความเข้าใจกับครอบครัวไหม",
            "choices": [
                { "seq": "1", "desc": "อยากปรับความเข้าใจ", "nextQuestionId": "43003", "choice_score": "21" },
                { "seq": "2", "desc": "ไม่อยากปรับความเข้าใจ", "nextQuestionId": "43003", "choice_score": "25" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43003",
            "detail": "หากตอนนี้เธอกำลังรู้สึกแย่ หรือไม่สบายใจ ไม่เป็นไรนะ เราจะมาข้ามผ่านช่วงเวลานี้ไปด้วยกันโดยเราอยากให้เธอลองทบทวนดูว่าจริง ๆ แล้วปัญหาที่เกิดขึ้นเกิดจากอะไร",
            "choices": [
                { "seq": "1", "desc": "เกิดจากตัวเอง", "nextQuestionId": "43004", "choice_score": "3" },
                { "seq": "2", "desc": "เกิดจากตัวเองและคนอื่น", "nextQuestionId": "43004", "choice_score": "2" },
                { "seq": "3", "desc": "เกิดจากคนอื่น", "nextQuestionId": "43004", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43004",
            "detail": "น้องหมีอยากให้เธอได้ลองเลือกวิธีที่เหมาะสมกับเธอมากที่สุด",
            "choices": [
                { "seq": "1", "desc": "หาเวลาพูดคุยกับครอบครัวแบบพร้อมหน้าพร้อมตา", "nextQuestionId": "43005", "choice_score": "7" },
                { "seq": "2", "desc": "ลองแสดงออกทางการกระทำ", "nextQuestionId": "43005", "choice_score": "5" },
                { "seq": "3", "desc": "รอให้เธอและอีกฝ่ายอารมณ์เย็นลงก่อน", "nextQuestionId": "43005", "choice_score": "4" },
                { "seq": "4", "desc": "ลองเป็นฝ่ายที่เข้าไปพูดคุยกับครอบครัวก่อน", "nextQuestionId": "43005", "choice_score": "6" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43005",
            "detail": "เธอคิดว่าเธอต้องการคนช่วยในการไกล่เกลี่ยปัญหานี้ไหม",
            "choices": [
                { "seq": "1", "desc": "ต้องการคนไกล่เกลี่ย", "nextQuestionId": "43006", "choice_score": "25.5" },
                { "seq": "2", "desc": "ไม่ต้องการคนไกล่เกลี่ย", "nextQuestionId": "43006", "choice_score": "21.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43006",
            "detail": "ถ้าเธออยากปรับความเข้าใจกับครอบครัว เธอจะแสดงออกทางใด",
            "choices": [
                { "seq": "1", "desc": "แสดงออกว่าอยากปรับความเข้าใจทางตรง", "nextQuestionId": "43007", "choice_score": "22" },
                { "seq": "2", "desc": "แสดงออกว่าอยากปรับความเข้าใจทางอ้อม", "nextQuestionId": "43007", "choice_score": "26" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "44001",
            "detail": "ตอนนี้เธอกําลังอยู่ในสถานะไหน",
            "choices": [
                { "seq": "1", "desc": "โสด", "nextQuestionId": "45001", "choice_score": "0" },
                { "seq": "2", "desc": "มีแฟน", "nextQuestionId": "45009", "choice_score": "0" },
                { "seq": "3", "desc": "คนคุย", "nextQuestionId": "45017", "choice_score": "0" },
                { "seq": "4", "desc": "มือที่ 3", "nextQuestionId": "45025", "choice_score": "0" }
            ],
            "questionType": "1"

        },

        {
            "questionId": "45001",
            "detail": "สาเหตุอะไรที่ทําให้เธอรู้สึกกังวลใจ",
            "choices": [
                { "seq": "1", "desc": "กลัวการมีความรัก กลัวการเริ่มต้นใหม่ ไม่กล้าเปิดใจ", "nextQuestionId": "45002", "choice_score": "2" },
                { "seq": "2", "desc": "เหงา โสดนานเกินไป", "nextQuestionId": "45002", "choice_score": "1" },
                { "seq": "3", "desc": "คิดถึงแฟนเก่า / move on ไม่", "nextQuestionId": "45002", "choice_score": "3" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45002",
            "detail": "เธอพอใจกับความรู้สึกในตอนนี้หรือไม่",
            "choices": [
                { "seq": "1", "desc": "พอใจ", "nextQuestionId": "45003", "choice_score": "41" },
                { "seq": "2", "desc": "ไม่พอใจ", "nextQuestionId": "45003", "choice_score": "45" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45003",
            "detail": "สาเหตุอะไรที่ทำให้เธอรู้สึกกลัวการมีความรักครั้งใหม่",
            "choices": [
                { "seq": "1", "desc": "ไม่อยากผูกมัดกับใคร", "nextQuestionId": "45004", "choice_score": "41.5" },
                { "seq": "2", "desc": "ยังเจ็บจากรักเก่า", "nextQuestionId": "45004", "choice_score": "45.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45004",
            "detail": "เธออยากมีใครสักคนมาเป็นคนพิเศษในชีวิตใช่ไหม",
            "choices": [
                { "seq": "1", "desc": "ใช่", "nextQuestionId": "45005", "choice_score": "42" },
                { "seq": "2", "desc": "ไม่ใช่", "nextQuestionId": "45005", "choice_score": "46" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45005",
            "detail": "ถ้าตอนนี้เธอกำลังตกหลุมรักใครสักคนหนึ่งอยู่ หากวันนึงเขาจากไปเพราะเราไม่ได้ผูกมัดกัน เธอจะยอมรับได้หรือไม่",
            "choices": [
                { "seq": "1", "desc": "ยอมรับได้", "nextQuestionId": "45006", "choice_score": "42.5" },
                { "seq": "2", "desc": "ยอมรับไม่ได้", "nextQuestionId": "45006", "choice_score": "46.5" }
            ],
            "questionType": "1"
        },

      

        {
            "questionId": "45009",
            "detail": "เธอพอใจในความสัมพันธ์ของเธอในตอนนี้หรือไม่",
            "choices": [
                { "seq": "1", "desc": "พอใจ", "nextQuestionId": "45010", "choice_score": "51" },
                { "seq": "2", "desc": "ไม่พอใจ", "nextQuestionId": "45010", "choice_score": "55" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45010",
            "detail": "อาทิตย์ที่ผ่านมาเธอทะเลาะกับแฟนบ่อยแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "ทะเลาะกันบ่อยมาก", "nextQuestionId": "45011", "choice_score": "3" },
                { "seq": "2", "desc": "ทะเลาะกันปานกลาง", "nextQuestionId": "45011", "choice_score": "2" },
                { "seq": "2", "desc": "ทะเลาะค่อนข้างน้อย", "nextQuestionId": "45011", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45011",
            "detail": "เธอได้เปิดใจพูดคุยถึงปัญหากันหรือยัง",
            "choices": [
                { "seq": "1", "desc": "ได้ลองเปิดใจคุยกันแล้ว", "nextQuestionId": "45012", "choice_score": "51.5" },
                { "seq": "2", "desc": "ยังไม่เคยลองเปิดใจคุยกันเลย", "nextQuestionId": "45012", "choice_score": "55.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45012",
            "detail": "บอกได้ไหมว่า แฟนของเธอมีข้อดีหรือข้อเสียมากกว่ากัน",
            "choices": [
                { "seq": "1", "desc": "แฟนของเธอมีข้อดีมากกว่า", "nextQuestionId": "45013", "choice_score": "52" },
                { "seq": "2", "desc": "แฟนของเธอมีข้อเสียมากกว่า", "nextQuestionId": "45013", "choice_score": "56" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45013",
            "detail": "ลองทบทวนตัวเองว่าความรักครั้งนี้คุณยังอยากจับมือกันและพยายามต่อหรือไม่",
            "choices": [
                { "seq": "1", "desc": "ยังอยากพยายามต่อกับความรัก", "nextQuestionId": "45014", "choice_score": "52.5" },
                { "seq": "2", "desc": "รู้สึกเหนื่อย ไม่อยากพยายามแล้ว", "nextQuestionId": "45014", "choice_score": "56.5" }
            ],
            "questionType": "1"
        },


        {
            "questionId": "45017",
            "detail": "เธออยู่ในสถานะคนคุยมานานแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "เพิ่งเริ่มคุยได้ไม่นาน", "nextQuestionId": "45018", "choice_score": "1" },
                { "seq": "2", "desc": "คุยมาสักพักแต่ไม่นานมาก", "nextQuestionId": "45018", "choice_score": "2" },
                { "seq": "3", "desc": "คุยมานานมาก", "nextQuestionId": "45018", "choice_score": "3" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45018",
            "detail": "เธอกับเข้ากันได้ดีกับอีกฝ่ายมากแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "เข้ากันได้ดีมาก", "nextQuestionId": "45019", "choice_score": "61" },
                { "seq": "2", "desc": "เข้ากันได้บ้าง", "nextQuestionId": "45019", "choice_score": "63" },
                { "seq": "3", "desc": "เข้ากันไม่ได้เลย", "nextQuestionId": "45019", "choice_score": "65" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45019",
            "detail": "ความสัมพันธ์ของเธอตอนนี้อีกฝ่ายมีความชัดเจนหรือไม่",
            "choices": [
                { "seq": "1", "desc": "ความสัมพันธ์ชัดเจน", "nextQuestionId": "45020", "choice_score": "61.5" },
                { "seq": "2", "desc": "ความสัมพันธ์ที่ไม่ชัดเจน", "nextQuestionId": "45020", "choice_score": "65.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45020",
            "detail": "เธออยากคุยและพัฒนาความสัมพันธ์ต่อกับคนนี้ไหม",
            "choices": [
                { "seq": "1", "desc": "อยากความสัมพันธ์ต่อไป", "nextQuestionId": "45021", "choice_score": "62" },
                { "seq": "2", "desc": "ไม่อยากความสัมพันธ์ต่อ", "nextQuestionId": "45021", "choice_score": "66" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45021",
            "detail": "เขาปฏิบัติกับเธอเป็นคนพิเศษหรือทำแบบนี้กับเหมือนคนทั่วไป",
            "choices": [
                { "seq": "1", "desc": "เขาปฎิบัติกับเราเหมือนคนพิเศษ", "nextQuestionId": "45022", "choice_score": "62.5" },
                { "seq": "2", "desc": "เขาปฎิบัติกับเราเหมือนคนทั่วไป", "nextQuestionId": "45022", "choice_score": "66.5" }
            ],
            "questionType": "1"
        },

       

        {
            "questionId": "45025",
            "detail": "เธอพอใจในความสัมพันธ์ในตอนนี้หรือไม่",
            "choices": [
                { "seq": "1", "desc": "พอใจ", "nextQuestionId": "45026", "choice_score": "75" },
                { "seq": "2", "desc": "ไม่พอใจ", "nextQuestionId": "45026", "choice_score": "71" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45026",
            "detail": "เธอรู้หรือไม่ว่าคนที่คุณรักตอนนี้เขามีเจ้าของแล้ว",
            "choices": [
                { "seq": "1", "desc": "รู้ตั้งแต่แรก", "nextQuestionId": "45027", "choice_score": "75.5" },
                { "seq": "2", "desc": "รู้เมื่อได้คุยมาสักพัก", "nextQuestionId": "45027", "choice_score": "71.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45027",
            "detail": "เธอรู้ได้อย่างไรว่าเขามีเจ้าของ",
            "choices": [
                { "seq": "1", "desc": "เขามาบอก", "nextQuestionId": "45028", "choice_score": "76" },
                { "seq": "2", "desc": "รู้ด้วยตัวเอง", "nextQuestionId": "45028", "choice_score": "72" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45028",
            "detail": "เธอคิดว่าเขาจริงใจกับเธอแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "100%", "nextQuestionId": "45029", "choice_score": "5" },
                { "seq": "2", "desc": "75%", "nextQuestionId": "45029", "choice_score": "4" },
                { "seq": "3", "desc": "50%", "nextQuestionId": "45029", "choice_score": "3" },
                { "seq": "2", "desc": "25%", "nextQuestionId": "45029", "choice_score": "2" },
                { "seq": "3", "desc": "ไม่มีความจริงใจ", "nextQuestionId": "45029", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45029",
            "detail": "ถ้ามีโอกาสได้พัฒนาความสัมพันธ์จนเป็นแฟนกัน เธอคิดว่าเขาจะนอกใจหรือไม่",
            "choices": [
                { "seq": "1", "desc": "นอกใจแน่นอน", "nextQuestionId": "45030", "choice_score": "72.5" },
                { "seq": "2", "desc": "ไม่นอกใจ เชื่อมั่นในตัวเขา", "nextQuestionId": "45030", "choice_score": "76.5" }
            ],
            "questionType": "1"
        },

       
        {
            "questionId": "46001",
            "detail": "ตอนนี้ปัญหาเรื่องการเงินของเธอกระทบต่อจิตใจเธอแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "46002", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "46002", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "46002", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "46002", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "46002", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "46002",
            "detail": "หากตอนนี้เธอกำลังรู้สึกกังวลใจ ไม่ต้องกลัวไปนะ เรามาข้ามผ่านอุปสรรคนี้ไปด้วยกัน โดยน้องหมีอยากนำเสนอรูปแบบเหล่านี้มาให้เธอได้ลองเลือก",
            "choices": [
                { "seq": "1", "desc": "ลองจัดลำดับความสำคัญของหนี้กัน", "nextQuestionId": "46003", "choice_score": "85" },
                { "seq": "2", "desc": "มาลองวางแผนการใช้เงินกัน", "nextQuestionId": "46003", "choice_score": "80" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "46003",
            "detail": "ถ้าให้เธอลองวางแผนจัดระเบียบหนี้เธอพอจะนึกออกกันไหม",
            "choices": [
                { "seq": "1", "desc": "คิดออกๆ", "nextQuestionId": "46004", "choice_score": "80.5" },
                { "seq": "2", "desc": "ยังไม่เข้าใจเท่าไหร่", "nextQuestionId": "46004", "choice_score": "85.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "46004",
            "detail": "เธอมองว่ารูปแบบใดที่เธอสามารถพอที่จะทำให้หนี้ลดลงไปได้",
            "choices": [
                { "seq": "1", "desc": "ยืม/กู้เงินจากคนอื่นมาโปะหนี้", "nextQuestionId": "46005", "choice_score": "82" },
                { "seq": "2", "desc": "ขายสินทรัพย์ที่ตนเองมีอยู่", "nextQuestionId": "46005", "choice_score": "81.5" },
                { "seq": "3", "desc": "เพิ่มรายได้ด้วยงานพิเศษ", "nextQuestionId": "46005", "choice_score": "81" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "46005",
            "detail": "เธอคิดว่าการยืม/กู้เงินเพื่อมาโปะหนี้",
            "choices": [
                { "seq": "1", "desc": "ข้อดีมากกว่า", "nextQuestionId": "46006", "choice_score": "86" },
                { "seq": "2", "desc": "ข้อเสียมากกว่า", "nextQuestionId": "46006", "choice_score": "82.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "46006",
            "detail": "น้องหมีอยากให้เธอทำใจให้สบาย และลองคิดว่ามีวิธีใดที่จะช่วยทำให้ตัดสินใจขายได้ง่ายขึ้น",
            "choices": [
                { "seq": "1", "desc": "เช็คว่ามีทรัพย์สินใดที่จะนำมาขายได้บ้าง", "nextQuestionId": "46007", "choice_score": "84" },
                { "seq": "2", "desc": "นำทรัพย์สินที่มีความจำเป็นน้อยไปขายก่อน", "nextQuestionId": "46007", "choice_score": "83.5" },
                { "seq": "2", "desc": "ทำทั้ง 2 วิธีข้างต้น", "nextQuestionId": "46007", "choice_score": "83" }
            ],
            "questionType": "1"
        },

       ]




    /*await psql.manyOrNone(sql)
                    .then((data) => {
                     
    
                    console.log(data.length)
                    if(data.length >0){ 
                    ret.status=200
                    ret.message="Success"
                    ret.data = data
    
    
                    }
    
                    })
                    .catch(error => {
                    // error;
                    ret.status =400
                    ret.message="Error"
                    throw error  
                    });*/
    return question

}

export default question