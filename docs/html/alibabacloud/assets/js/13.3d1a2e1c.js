(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{224:function(t,a,e){"use strict";e.r(a);var r=e(0),o=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),e("p",[t._v("域名的目的是通过一段容易识别的文字段来指向服务器上的网站。如果没有域名，网站就只能通过IP地址访问，这样不便于记忆和识别。")]),t._v(" "),e("p",[t._v("为了使网站可以通过域名访问，有三个工作：")]),t._v(" "),e("h2",{attrs:{id:"域名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名解析")]),t._v(" "),e("p",[t._v("AWS给每台EC2实例都配置了一个公有DNS")]),t._v(" "),e("p",[t._v("当EC2配置的是动态IP时，每次重启实例，IP地址都可能会发生变化，导致需要重新解析域名，给运维带来不必要的麻烦。AWS的DNS功能，就是帮我们避免这个问题的。")]),t._v(" "),e("ol",[e("li",[t._v("购买域名(也称之为注册域名)，并完成实名制认证")]),t._v(" "),e("li",[t._v("登录阿里云控制台，打开域名列表，在所需操作的域名上点击“解析”\n"),e("img",{attrs:{src:"http://libs-websoft9-com.oss-cn-qingdao.aliyuncs.com/Websoft9/DocsPicture/en/alicloud/aliyun-dns-websoft9.png",alt:"A记录解析"}})]),t._v(" "),e("li",[t._v("增加一个A记录：将域名（或子域名）指向IP的操作(下图示例)\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-dnsrev-websoft9.png",alt:"A记录解析"}})]),t._v(" "),e("li",[t._v("保存并等待生效")])]),t._v(" "),e("h2",{attrs:{id:"域名绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名绑定")]),t._v(" "),e("p",[t._v("域名绑定指一台服务器在多网站部署的时候，通过"),e("strong",[t._v("虚拟主机配置文件")]),t._v("，将每个域名绑定到其对应的网站目录，从而达到每个网站都可以通过域名访问且相会不会干扰的效果。")]),t._v(" "),e("p",[t._v("下面是一个虚拟配置文件范例（LAMP环境）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<VirtualHost *:80>\nServerName www.mydomain.com\nServerAlias other.mydomain.com\nDocumentRoot "/data/wwwroot/default/mysite2"\nErrorLog "/var/log/httpd/www.mydomain.com_error_apache.log"\nCustomLog "/var/log/httpd/www.mydomain.com_apache.log" common\n<Directory "/data/wwwroot/default/mysite1">\nOptions Indexes FollowSymlinks\nAllowOverride All\nRequire all granted\n</Directory>\n</VirtualHost>\n')])])]),e("p",[t._v("通过"),e("strong",[t._v("登录云服务器")]),t._v("，然后修改配置文件中域名相关的值（ServerName,ServerAlias等）实现绑定域名")]),t._v(" "),e("blockquote",[e("p",[t._v("配置文件主要包括域名与网站的对应的关系，即某个域名应该对应访问哪个目录。如果服务器上有多个网站，就必须对应多个配置文件。")])]),t._v(" "),e("h2",{attrs:{id:"域名备案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名备案","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名备案")]),t._v(" "),e("p",[t._v("阿里云的备案政策简述：")]),t._v(" "),e("ul",[e("li",[t._v("购买服务器2个月或以上，就可以由阿里云免费提供备案服务。")]),t._v(" "),e("li",[t._v("备案过程请通过"),e("a",{attrs:{href:"https://beian.aliyun.com/order/index.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云备案系统"),e("OutboundLink")],1),t._v("全程操作")]),t._v(" "),e("li",[t._v("备案是纯粹的商务流程活动，没有任何技术门槛，建议用户自行完成\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-beian-websoft9.png",alt:"阿里云备案"}})]),t._v(" "),e("li",[t._v("服务器地区在中国大陆的对应的域名需要备案")])]),t._v(" "),e("blockquote",[e("p",[t._v("阿里云 7*24小时备案专线：95187转3 确保您的备案咨询能够得到及时回复")])])])},[],!1,null,null,null);a.default=o.exports}}]);