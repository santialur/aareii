<!DOCTYPE html>
<html>
	<head>
		<title>Chat</title>

        <?php include '../empresasImports.html'; ?>
	</head>

	<body>
    	<div class="wrapperMedium">
            <?php include '../empresasHeader.html'; ?>

            <?php include '../empresasMenu.html';   ?>

    		<div id="content">
    			<div style="margin-left:5%; margin-top:5%">
    				<script id="sid0020000056189548579">
    				(function()
    				{
    					function async_load()
    					{
    						s.id="cid0020000056189548579";
    						s.src='http://st.chatango.com/js/gz/emb.js';
    						s.style.cssText="width:95%;height:350px";
    						s.async=true;
    						s.text='{"handle":"aareii","arch":"js","styles":{"a":"B10B0B","b":100,"c":"FFFFFF","d":"FFFFFF","k":"B10B0B","l":"B10B0B","m":"B10B0B","n":"FFFFFF","q":"B10B0B","r":100,"cvbg":"CC0000","cvw":75,"cvh":40}}';
    						var ss = document.getElementsByTagName('script');
    						for (var i=0, l=ss.length; i < l; i++)
    						{
    							if (ss[i].id=='sid0020000056189548579')
    							{
    								ss[i].id +='_';
    								ss[i].parentNode.insertBefore(s, ss[i]);
    								break;
    							}
    						}
    					}
    					var s=document.createElement('script');
    					if (s.async==undefined)
    					{
    						if (window.addEventListener)
    						{
    							addEventListener('load',async_load,false);
    						}
    						else if (window.attachEvent) 
    						{
    							attachEvent('onload',async_load);
    						}
    					}
    					else 
    					{
    						async_load();
    					}
    				})();
    				</script>
     				
    			</div>
    		</div>
    		
            <?php include '../empresasFooter.html'; ?>
    	</div>
	</body>
</html>

