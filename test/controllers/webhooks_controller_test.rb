require "test_helper"

class WebhooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @webhook = webhooks(:one)
  end

  test "should get index" do
    get webhooks_url, as: :json
    assert_response :success
  end

  test "should create webhook" do
    assert_difference("Webhook.count") do
      post webhooks_url, params: { webhook: { details: @webhook.details, job_id: @webhook.job_id, status: @webhook.status } }, as: :json
    end

    assert_response :created
  end

  test "should show webhook" do
    get webhook_url(@webhook), as: :json
    assert_response :success
  end

  test "should update webhook" do
    patch webhook_url(@webhook), params: { webhook: { details: @webhook.details, job_id: @webhook.job_id, status: @webhook.status } }, as: :json
    assert_response :success
  end

  test "should destroy webhook" do
    assert_difference("Webhook.count", -1) do
      delete webhook_url(@webhook), as: :json
    end

    assert_response :no_content
  end
end
