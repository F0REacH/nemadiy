<%@ include file="/common/taglibs.jsp"%>
<head>
  <title><fmt:message key="flow.title" /></title>
  <meta name="heading" content="${flow.name}" />
</head>

<p>${flow.description}</p>

<div class="actionBox">
  Please enter the Task details, the name and
    description and the parameters to run the flow.
</div>
${messageContext.allMessages}
<c:if test="${not empty messageContext.allMessages}">
	<div class="message">
		<c:forEach items="${messageContext.allMessages}" var="message"><p >${message}</p></c:forEach>
	</div>
</c:if>

<br/>
<div id="formcontainer_job">
  <div class="form_job">
    <form:form commandName="taskFlowModel">
      <fieldset id="pt1">
        <label>Please enter Task Name:</label>
        <form:input path="name" />
      </fieldset>
      <fieldset id="pt1">
        <label>Please enter Task Description:</label>
        <form:textarea path="description" rows="5" cols="50" />
      </fieldset>
      <c:forEach items="${componentList}" var="component" varStatus="status">
        <c:if test="${!component.hidden}">
          <fieldset id="${component.name}">
          ${component.name}
          <br/>
          <label>${component.description}</label>          
         <div>    <a href="${flowExecutionUrl}&idx=${status.index}&_eventId=edit">Edit</a></div>
          </fieldset>
        </c:if>
      </c:forEach>
      <input type="hidden" name="flowTemplateId" value="${flow.id}" />
      <input type="hidden" name="flowTemplateUri" value="${flow.uri}" />
      <fieldset id="button">
      <input type="submit" name="_eventId_review" value="Review" />
      <input type="submit" name="_eventId_cancel" value="Cancel" />
      <input type="submit" name="_eventId_clear" value="Clear" />
      </fieldset>
    </form:form>
  </div>
</div>
