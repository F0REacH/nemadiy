<%@ include file="/common/taglibs.jsp"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>component property editor</title>
<meta name="heading" content="Edit Component Properties" />
</head>
<body>

<div style="margin-bottom:5px;">Component: ${component.name}</div>

<form:form enctype="multipart/form-data">
  
  <c:forEach items="${shownMap}" var="entry">
  	<c:if test="${not fn:startsWith(entry.key,'_') }">
    <fieldset>
    <label for="jobname" class="label" > ${entry.key}: </label>
    <render:property roles="${userRoles}"
            component="${component.instanceUri}" value="${entry.value}"
            class="cssClass" />
    <font color="green">${entry.value.description}</font>
    </fieldset>
    </c:if>
  </c:forEach>
  <input type="submit" name="_eventId_save" value="Save" />
  <input type="submit" name="_eventId_cancel" value="Cancel"  style="float:right"/>
</form:form>
</body>
