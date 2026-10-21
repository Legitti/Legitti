quotes = [];
quotes[0] = "Music is the universal language of mankind.";
quotes[1] = "Music is to the soul, what words are to the mind.";
quotes[2] = "Try and fail, but never fail to try.";
quotes[3] = "You know you\'re in love, when you can\'t fall asleep because reality is finally better than your dreams.";
quotes[4] = "Be yourself, because an original is worth more than a copy.";
quotes[5] = "Complete strangers can stand silently next to each other in an elevator and not even look each other in the eye. But at a concert, those same strangers could find themselves dancing and singing together like best friends. That\'s the power of music.";
quotes[6] = "Music expresses that which cannot be said, and on which it is impossible to be silent.";
quotes[7] = "Incredible change happens in your life when you decide to take control of what you do have power over, instead of craving control over what you don\'t.";
quotes[8] = "Music and silence combine strongly, because music is done with silence, and silence is full of music.";
quotes[9] = "Be strong when you are weak, be brave when you are scared, be humble when you are victorious, be badass everyday.";
quotes[10] = "Take risks: If you win, you will be happy; if you lose, you will be wise.";
quotes[11] = "Loving every girl in the world doesn\'t make you a man. Loving one girl and making her feel like she\'s the world does.";
quotes[12] = "Don\'t force them to love you. Force them to leave you and whoever insists to stay, is the one who truly loves you.";
quotes[13] = "There\'s a lot of difference between listening and hearing.";
quotes[14] = "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.";
quotes[15] = "Sometimes life doesn\'t want to give you something you want, not because you don\'t deserve it, but because you deserve more.";
quotes[16] = "The best gift you can give to someone is your time, because you\'re giving them something you can never get back.";
quotes[17] = "The first to apologize is the bravest, the first to forgive is the strongest, and the first to forget is the happiest.";
quotes[18] = "Sometimes, being different feels a lot like being alone. That being said, being true to that and being true to my standards and my way of doing things in my art and my music, everything that has made me feel very different.. in the end, it has made me the happiest.";
quotes[19] = "Kindness is a language the deaf can hear and the blind can see.";
quotes[20] = "Love is a silent language that only the heart can speak and only the soul can understand.";
quotes[21] = "There are a lot of amazing people that are not perfect, but they are loved. Think about it and say it after me...\"I am not meant to be perfect.. I am meant to be me and I am going to be the best ME that I can be\".";
quotes[22] = "Everyone you meet is afraid of something, loves something, and has lost something. Remember that. Stop judging.";
quotes[23] = "Being honest may not get you a lot of friends. But it\'ll always get you the right ones.";
quotes[24] = "Life is like a camera. Focus on what\'s important, capture the good times, develop from the negatives and if things don\'t work out, just take another shot.";
quotes[25] = "Opportunity is missed by most people because it is dressed in overalls and looks like work.";
quotes[26] = "Any fool can criticize, condemn, and complain but it takes character and self control to be understanding and forgiving.";
quotes[27] = "Most people live and die with their music still unplayed. They never dare to try.";
quotes[28] = "The young people think the old people are fools - but the old people know, the young people are fools.";
quotes[29] = "Live as if you were to die tomorrow. Learn as if you were to live forever.";
quotes[30] = "If you want to reach the top, don\'t run over others. Likely, the only way you\'ll reach the top is to be carried there by others.";
quotes[31] = "It is better to be hated for what you are, than to be loved for what you are not.";
quotes[32] = "A man is a success if he gets up in the morning and gets to bed at night, and in between, he does what he wants to do.";
quotes[33] = "A gentleman is one who puts more into the world than he takes out.";
quotes[34] = "Turn your wounds into wisdom.";
quotes[35] = "Live in the sunshine, swim the sea, drink the wild air.";
quotes[35] = "The best way to predict your future is to create it.";
quotes[36] = "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.";
quotes[37] = "The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.";
quotes[38] = "There are no regrets in life, just lessons.";
quotes[39] = "I feel no pain, I feel no regrets.";
quotes[39] = "If it don\'t kill me, it\'s only gonna make me stronger within.";

//calculate a random index number
index = Math.floor(Math.random() * quotes.length);

//display the quotation
document.write("\n");
document.write("<div style ='word-spacing:-1px;line-height: 1.2;font-size:16px;color:white;text-align:left;-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;'>" + quotes[index] + "\n</div>");
document.write("\n");

//done