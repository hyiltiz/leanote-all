var MSG={"noTag":"Aucune étiquette","saveSuccess":"Sauvegarde réussie","none":"Aucun","like":"J'aime","unlike":"Je n'aime plus","delete":"Effacer","cancel":"Annuler","confirm":"Confirmer","chooseReason":"请选择举报理由","reportSuccess":"举报成功, 我们处理后会通知作者, 感谢您的监督","error":"Erreur","reportComment?":"举报该评论?","reportBlog?":"举报该博客?","confirmDeleteComment":"Êtes-vous sûr?","scanQRCode":"Ouvrez Weichat et scannez le QR Code","justNow":"Seulement maintenant","minutesAgo":"Il y a quelques minutes","hoursAgo":"Il y a plusieurs heures","daysAgo":"Il y a plusieurs jours","weeksAgo":"Il y a plusieurs semaines","monthsAgo":"Il y a plusieurs mois"};function getMsg(key, data) {var msg = MSG[key];if(msg) {if(data) {if(!isArray(data)) {data = [data];}for(var i = 0; i < data.length; ++i) {msg = msg.replace("%s", data[i]);}}return msg;}return key;}