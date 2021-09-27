export default function showInfo(word, id) {
  switch (word) {
    case "P":
      return {
        title: "Pain",
        text: [
          `
            Всё начинается с "боли". Чтобы искать решение проблемы её нужно найти. Инсайт считают самым вожделенным этапом решения любой задачи. Всего таких этапов существует четыре. На первом происходит знакомство с проблемой.
            `,
          `
           Соберите всю возможную информацию, прямо или косвенно относящуюся к вопросу. Попутно попробуйте применить к задачке полученную информацию и известные вам способы решения.`,
        ],
        showLink: "Первый шаг",
        link: "/pain",
      };
    case "I":
      return {
        title: "Inspiration",
        text: [
          `
            Вторая ступень процесса — инкубационный период. На этой стадии стоит мысленно отвлечься от задачи и дать своему подсознанию возможность поработать над ней самостоятельно. Пока проблема бороздит по подсознательным пластам психики, вы можете заняться любыми, не связанными с задачей, делами: играть в Xbox, читать газету, гулять с собакой или спать.
        `,
          `
            На этом этапе происходить постоянный процесс вдохновения - всё что может помочь сложить пазл и найти решение не ускользает от вашего бессознательного. Искать ответы лушчше всего в решениях других ищущих!`,
        ],
        showLink: "Второй шаг",
        link: "/inspiration",
      };
    case "T":
      return {
        title: "Tools",
        text: [
          `
          Третий этап — собственно сам инсайт. В момент, когда у вас накапливается критическая масса информации, подсознание наконец «выдаёт» решение, причём новым его назвать нельзя. Это решение всё время находилось в подсознании, а осознание пришло совершенно случайно, при общении с незнакомым человеком или на прогулке. Абсолютно несвязанные с проблемой вещи, которыми вы занимались на этапе инкубации, как будто бы всё прояснили. Чаще всего инсайт приходит совсем не тогда и не там, где он по логике вещей должен возникнуть.
              `,
          `
              Запишите этот инсайт, чтобы не потерять его в будущем.`,
        ],
        showLink: "Третий, уже совсем близко",
        link: `/tools/${id}`,
      };
    case "A":
      return {
        title: "Ability",
        text: [
          `
          Этап возможностей, этап проверки вашего решения. Это «краш-тест» для инсайта. На стадии проверки попробуйте сформулировать решение и внедрить его в жизнь. Тогда и становится понятно, работает оно или нет.
              `,
        ],
        showLink: "Проверить догатку",
        link: "/ability",
      };
    default:
      return {
        title: "Инсайт -",
        text: [
          `
                  это неочевидное знание, которое сильно зависит от контекста, напрямую
                  связано с опытом человека и помогает понять, какая незакрытая
                  потребность у него есть, и построить на ней предложение бренда.
                  `,
          `
                  PITA поможет не потерять нужные наблюдения, поделиться ими и преодолеть
                  путь от "Ничего" до "Идея"`,
        ],
        showLink: null,
      };
  }
}
